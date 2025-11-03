import { AppRootElementName } from '@/app/AppRootElementName.ts';

export class AppHtmlElementAdapter {
  private static _timestamp = new Date().getTime();
  private static _isInitialized = false;

  public constructor() {
    if (AppHtmlElementAdapter._isInitialized) return;

    AppHtmlElementAdapter._timestamp = new Date().getTime();
    AppHtmlElementAdapter._isInitialized = true;

    this.prepareIndexHtml();
  }

  private prepareIndexHtml(): void {
    const ids: string[] = [AppRootElementName.Portal, AppRootElementName.Main]
      .map(this.appendTimestamp.bind(this))
      .slice()
      .reverse();

    ids.forEach((id): void => {
      const newElement = document.createElement('div');
      newElement.setAttribute('id', id);
      document.body.insertAdjacentElement('afterbegin', newElement);
    });
  }

  private appendTimestamp(name: string): string {
    return `${name}-${AppHtmlElementAdapter._timestamp.toString()}`;
  }

  public getMainRootElement(): HTMLElement {
    return this.getHtmlElement(AppRootElementName.Main);
  }

  public getPortalRootElement(): HTMLElement {
    return this.getHtmlElement(AppRootElementName.Portal);
  }

  private getHtmlElement(name: string): HTMLElement {
    const id = this.appendTimestamp(name);
    const htmlElement = document.getElementById(id);
    if (!htmlElement) {
      throw new Error(`#${id} element can not be found`);
    }
    return htmlElement;
  }
}
