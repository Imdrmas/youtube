import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.page.html',
  styleUrls: ['./sheet.page.scss'],
})
export class SheetPage implements OnInit {
  items = [
    {
      text: "Create a short",
      icon: "videocam-outline"
    },
    {
      text: "Update a video",
       icon: "push-outline"
    },
    {
      text: "Go live",
      icon: "radio-outline"
    },
    {
      text: "Add to your story",
      icon: "add-circle-outline"
    },
    {
      text: "Create a post",
      icon: "create-outline"
    }
  ]

  constructor(private modelCrtl: ModalController) { }

  ngOnInit() {
  }

  dissmis() {
    this.modelCrtl.dismiss();
  }

}
