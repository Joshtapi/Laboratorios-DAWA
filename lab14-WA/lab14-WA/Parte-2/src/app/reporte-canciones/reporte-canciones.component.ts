import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-reporte-canciones',
  templateUrl: './reporte-canciones.component.html', 
  styleUrls: ['./reporte-canciones.component.css']
})


export class ReporteCancionesComponent implements OnInit {
  canciones: any[] = [];
  filtroGenero: string = '';
  filtroNombre: string = '';
  filtroLanzamiento: number | null = null;
  resultadosEncontrados: boolean = true;
  originalCanciones: any[] = [];

  constructor(private http: HttpClient) {
    (<any>pdfMake).vfs = pdfFonts.pdfMake.vfs as any;
  }

  ngOnInit() {
    this.http.get<any[]>('./assets/canciones.json').subscribe(data => {
      this.canciones = data;
      this.originalCanciones = [...data];
    });
  }

  generarPDF() {
    const contenido = [
      { text: 'Informe de Canciones', style: 'header' },
      { text: '\n\n' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*'],
          body: [
            ['Título', 'Género', 'Año de lanzamiento'],
            ...this.canciones.map(canciones => [canciones.titulo, canciones.genero, canciones.lanzamiento.toString()])
          ]
        }
      }
    ];

    const estilos: any = {
      header: {
        fontSize: 30, // Aumenta el tamaño del título
        bold: true,
        color: '#4a90e2',
        alignment: 'center',
        margin: [0, 0, 0, 30], // Aumenta el espacio inferior
        fontFamily: 'Arial',
        textDecoration: 'none', // Sin subrayado
        marginBottom: 50 // Aumenta el margen inferior
      },
      tableStyle: {
        margin: [0, 40, 0, 0], // Mayor espacio superior
        fontSize: 24, // Aumenta el tamaño de fuente de la tabla
        color: '#333',
        header: {
          bold: true,
          fontSize: 28, // Aumenta el tamaño de fuente del encabezado de la tabla
          color: '#fff',
          fillColor: '#4a90e2'
        },
        alternateRowColor: '#f5f5f5',
        border: {
          color: '#ccc',
          width: 1
        },
        cellPadding: [20, 15, 20, 15], // Aumenta el relleno de celda
        alignment: 'center' // Alinea el contenido de la tabla al centro
      },
      cuerpoTabla: {
        fontSize: 20, // Aumenta el tamaño de fuente del cuerpo de la tabla
        color: '#333',
        alignment: 'left' // Alinea el texto del cuerpo de la tabla a la izquierda
      }
    };

    

    const documentDefinition = {
      content: contenido,
      styles: estilos
    };

    pdfMake.createPdf(documentDefinition).open();
  }

  exportarCSV() {
    const csvData = this.canciones.map(canciones => ({
      titulo: canciones.titulo,
      genero: canciones.genero,
      lanzamiento: canciones.lanzamiento
    }));

    const csvContent = '\ufeff' + this.convertToCSV(csvData);

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'informe-canciones.csv');
  }

  private convertToCSV(data: any[]): string {
    const header = Object.keys(data[0]);
    const csv = [
      header.join(','),
      ...data.map(row => header.map(fieldName => JSON.stringify(row[fieldName])).join(','))
    ];
    return csv.join('\n');
  }

  exportarJSON() {
    const jsonContent = JSON.stringify(this.canciones, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json;charset=utf-8' });
    saveAs(blob, 'informe-canciones.json');
  }

  exportarXML() {
    const xmlContent = this.convertToXML(this.canciones);
    const blob = new Blob([xmlContent], { type: 'application/xml;charset=utf-8' });
    saveAs(blob, 'informe-canciones.xml');
  }

  convertToXML(data: any[]): string {
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8" ?>';
    const xmlBody = data.map(item => {
      const properties = Object.entries(item).map(([key, value]) => `<${key}>${value}</${key}>`).join('');
      return `<item>${properties}</item>`;
    }).join('');

    return `${xmlHeader}<items>${xmlBody}</items>`;
  }


  aplicarFiltros() {
    this.canciones = this.originalCanciones.filter(canciones =>
      (this.filtroGenero === '' || canciones.genero.toLowerCase().includes(this.filtroGenero.toLowerCase())) &&
      (this.filtroNombre === '' || canciones.titulo.toLowerCase().includes(this.filtroNombre.toLowerCase())) &&
      (this.filtroLanzamiento === null || canciones.lanzamiento === this.filtroLanzamiento)
    );

    this.resultadosEncontrados = this.canciones.length > 0;
  }

  resetearFiltros() {
    this.http.get<any[]>('./assets/canciones.json').subscribe(data => {
      this.canciones = data;
      this.originalCanciones = [...data]; // Crear una copia del arreglo original
      this.filtroGenero = '';
      this.filtroNombre = '';
      this.filtroLanzamiento = null;
      this.resultadosEncontrados = true;
    });
  }
}
