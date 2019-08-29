import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  // styleUrls: ['./settings.component.css', '../app.component.css']
  styleUrls: ['./settings.component.css', '../app.component.scss']
})

export class SettingsComponent implements OnInit {

  constructor() { }

  pageTitle = 'SETTINGS';
  // pageTitle: string = 'SETTINGS';

  settingsForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
    language: new FormControl('', [Validators.required]),
    theme: new FormControl('', [Validators.required])
  });

  // Languages array
  languages = ['English', 'Francais'];

  // Themes array
  themes = ['ligth', 'regular', 'dark'];

  ngOnInit() {
    this.settingsForm.valueChanges.subscribe(console.log);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.settingsForm.value);
    console.warn(this.settingsForm.get('language').value);
  }

  revert() {
    this.settingsForm.reset();
    console.warn(this.settingsForm.status);
    console.warn(this.settingsForm.touched);

    // this.router.navigate(['/task']);
  }

  get getUserName() {
    return this.settingsForm.get('userName');
  }

  get getLanguage() {
    return this.settingsForm.get('language');
  }

}
