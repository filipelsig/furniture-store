import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Product} from '../../models/product.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private afs: AngularFirestore) {}

  get products(): Observable<Product[]> {
    return this.afs
      .collection<Product>('products')
      .snapshotChanges()
      .pipe(
        map(snapshots => {
          return snapshots.map(snapshot => {
            const id = snapshot.payload.doc.id;
            const data = snapshot.payload.doc.data();
            return {...data, id};
          });
        })
      );
  }

  product(id: string): Observable<Product> {
    return this.afs
      .doc<Product>(`products/${id}`)
      .snapshotChanges()
      .pipe(
        map(snapshot => {
          const data = snapshot.payload.data();
          return {...data, id: snapshot.payload.id};
        })
      );
  }
}
