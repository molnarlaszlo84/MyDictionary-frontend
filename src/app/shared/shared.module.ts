import { NgModule } from '@angular/core';
import { TranslateModule } from 'ng2-translate';
import { LoginService } from './login/login.service';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { RegistrationService } from './registration/registration.service';
import { WordsService } from './words/words.service';
import { AuthGuardService } from './guards/auth-guard.service';


@NgModule({
    imports: [
      CommonModule,
      TranslateModule,
      FormsModule
    ],
    exports: [
      CommonModule,
      TranslateModule,
      FormsModule
    ],
    declarations: [
      PageNotFoundComponent
    ],
    providers: [
      AuthGuardService,
      LoginService,
      RegistrationService,
      WordsService
    ],
})
export class SharedModule { }
