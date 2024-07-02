import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front';
  items: any[] | undefined;
  newItemName: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData().subscribe(
      (response) => {
        this.items = response;
      },
      (error) => {
        console.error('Erro ao carregar itens:', error);
      }
    );
  }

  getData() {
    return this.http.get<any[]>('http://localhost:3000/itens');
  }

  addItem() {
    const newItem = { nome: this.newItemName };
    this.http.post<any>('http://localhost:3000/itens', newItem).subscribe(
      (response) => {
        this.items?.push(response);
        this.newItemName = '';
      },
      (error) => {
        console.error('Erro ao adicionar item:', error);
      }
    );
  }

  deleteItem(id: number) {
    console.log(`Tentando deletar item com id: ${id}`);
    this.http.delete(`http://localhost:3000/itens/${id}`).subscribe(
      (response) => {
        console.log('Item deletado com sucesso', response);
        this.items = this.items?.filter(item => item.id !== id);
        console.log('Lista de itens atualizada', this.items);
      },
      (error) => {
        console.error('Erro ao deletar item:', error);
      }
    );
  }
}
