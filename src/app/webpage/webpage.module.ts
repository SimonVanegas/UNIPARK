import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { WebPageComponent } from './page/page.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { PricesComponent } from './components/prices/prices.component';
import { TestimonyComponent } from './components/testimony/testimony.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    AboutComponent,
    WebPageComponent,
    KnowledgeComponent,
    PricesComponent,
    TestimonyComponent,
    QuestionsComponent,
    FooterComponent
  ],
  imports: [
    RouterLink
  ],
  exports: [
    WebPageComponent
  ],
  providers: [],
})

export class WebPage { }
