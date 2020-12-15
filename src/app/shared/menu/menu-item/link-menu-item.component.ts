import { Component, Inject, OnInit } from '@angular/core';
import { LinkMenuItemModel } from './models/link.model';
import { isNotEmpty } from '../../empty.util';
import { environment } from '../../../../environments/environment';

/**
 * Component that renders a menu section of type LINK
 */
@Component({
  selector: 'ds-link-menu-item',
  templateUrl: './link-menu-item.component.html'
})
export class LinkMenuItemComponent implements OnInit {
  item: LinkMenuItemModel;
  hasLink: boolean;
  constructor(@Inject('itemModelProvider') item: LinkMenuItemModel) {
    this.item = item;
  }

  ngOnInit(): void {
    this.hasLink = isNotEmpty(this.item.link);
  }

  getRouterLink() {
    if (this.hasLink) {
      return environment.ui.nameSpace + this.item.link;
    }
    return undefined;
  }

}
