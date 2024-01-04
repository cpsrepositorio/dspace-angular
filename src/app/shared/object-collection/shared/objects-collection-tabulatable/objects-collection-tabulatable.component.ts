import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListableObject } from "../listable-object.model";
import { CollectionElementLinkType } from "../../collection-element-link.type";
import { Context } from "../../../../core/shared/context.model";
import { ViewMode } from "../../../../core/shared/view-mode.model";
import { DSpaceObject } from "../../../../core/shared/dspace-object.model";
import { DSONameService } from "../../../../core/breadcrumbs/dso-name.service";
import { RemoteData } from "../../../../core/data/remote-data";
import { PaginatedList } from "../../../../core/data/paginated-list.model";

@Component({
  selector: 'ds-objects-collection-tabulatable',
  template: ``,
})
export class AbstractTabulatableElementComponent<T extends PaginatedList<ListableObject>> {

  /**
   * The object to render in this list element
   */
  @Input() objects: T;

  /**
   * The link type to determine the type of link rendered in this element
   */
  @Input() linkType: CollectionElementLinkType;

  /**
   * The identifier of the list this element resides in
   */
  @Input() listID: string;

  /**
   * The value to display for this element
   */
  @Input() value: string;

  /**
   * Whether to show the badge label or not
   */
  @Input() showLabel = true;

  /**
   * Whether to show the thumbnail preview
   */
  @Input() showThumbnails;

  /**
   * The context we matched on to get this component
   */
  @Input() context: Context;

  /**
   * The viewmode we matched on to get this component
   */
  @Input() viewMode: ViewMode;

  /**
   * Emit when the object has been reloaded.
   */
  @Output() reloadedObject = new EventEmitter<RemoteData<PaginatedList<ListableObject>>>();

  /**
   * The available link types
   */
  linkTypes = CollectionElementLinkType;

  /**
   * The available view modes
   */
  viewModes = ViewMode;

  /**
   * The available contexts
   */
  contexts = Context;

  constructor(
    public dsoNameService: DSONameService,
  ) {
  }

}

