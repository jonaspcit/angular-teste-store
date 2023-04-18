import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProdutosComponent } from "./components/produtos/produtos.component";
import { CardProdutoComponent } from "./components/card-produto/card-produto.component";
import { CarrinhoComponent } from "./components/carrinho/carrinho.component";

const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
	},
	{
		path: "produto/:id",
		component: ProdutosComponent,
	},
	{
		path: "cardProduto",
		component: CardProdutoComponent,
	},
	{
		path: "carrinho",
		component: CarrinhoComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
