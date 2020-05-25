import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from "@angular/material/core";
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';


//Angular Material Components
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './dialogues/education/education.component';
import { LanguageComponent } from './dialogues/language/language.component';
import { LinksComponent } from './dialogues/links/links.component';
import { SkillsComponent } from './dialogues/skills/skills.component';
import { SummaryComponent } from './dialogues/summary/summary.component';
import { WorkExperienceComponent } from './dialogues/work-experience/work-experience.component';
import { RequestRecommendationComponent } from './dialogues/request-recommendation/request-recommendation.component';
import { ProfileCardComponent } from './profile/profile-card/profile-card.component';
import { NavComponent } from './nav/nav.component';
import { SigninComponent } from './registeration/signin/signin.component';
import { SignupComponent } from './registeration/signup/signup.component';
import { PostComponent } from './post/post.component';
import { PostActionsComponent } from './post/post-actions/post-actions.component';
import { PostBoxComponent } from './post/post-box/post-box.component';
import { PostContentComponent } from './post/post-content/post-content.component';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { PostFooterComponent } from './post/post-footer/post-footer.component';
import { PostHeaderComponent } from './post/post-header/post-header.component';
import { PostReactionsInfoComponent } from './post/post-reactions-info/post-reactions-info.component';
import { SharedPostComponent } from './shared-post/shared-post.component';
import { NetworkComponent } from './network/network.component';
import { SharedComponent } from './shared/shared.component';
import { SignoutComponent } from './signout/signout.component';
import { InvitatonItemComponent } from './network/invitaton-item/invitaton-item.component';
import { ConnectionsComponent } from './network/connections/connections.component';
import { ConnectionpageComponent } from './network/connectionpage/connectionpage.component';
import { InvitationListComponent } from './network/invitation-list/invitation-list.component';
import { MayknowListComponent } from './network/mayknow-list/mayknow-list.component';
import { MayknowItemComponent } from './network/mayknow-item/mayknow-item.component';
import { SidebarComponent } from './network/sidebar/sidebar.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';
import { HomeComponent } from './home/home.component';
import { NetworkSerivce } from './network/network.service';
import { PostService } from './post/post.service';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    EducationComponent,
    LanguageComponent,
    LinksComponent,
    SkillsComponent,
    SummaryComponent,
    WorkExperienceComponent,
    RequestRecommendationComponent,
    ProfileCardComponent,
    NavComponent,
    SigninComponent,
    SignupComponent,
    PostComponent,
    PostActionsComponent,
    PostBoxComponent,
    PostContentComponent,
    PostCreateComponent,
    PostFooterComponent,
    PostHeaderComponent,
    PostReactionsInfoComponent,
    SharedPostComponent,
    NetworkComponent,
    SharedComponent,
    SignoutComponent,
    InvitatonItemComponent,
    ConnectionsComponent,
    ConnectionpageComponent,
    InvitationListComponent,
    MayknowListComponent,
    MayknowItemComponent,
    SidebarComponent,
    PostEditComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FlexLayoutModule,
    MatNativeDateModule,
    MatDividerModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [
    NetworkSerivce,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
