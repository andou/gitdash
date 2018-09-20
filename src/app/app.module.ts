import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; //
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule
} from '@angular/material'; //

import { FlexLayoutModule } from '@angular/flex-layout'; //
import { GitDashboardComp } from './components/git-dashboard/git-dashboard';


import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        GitDashboardComp
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule, //
        MatCardModule, //
        MatIconModule, //
        MatToolbarModule, //
        MatButtonModule, //
        MatFormFieldModule, //
        MatInputModule, //
        MatSelectModule,
        MatExpansionModule,
        FlexLayoutModule, //
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
