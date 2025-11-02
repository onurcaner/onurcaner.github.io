import { AppRootElementName } from '@/app/AppRootElementName.ts';

export class AppHtmlElementAdapter {
  private static timestamp = new Date().getTime();
  private static isInitialized = false;

  public constructor() {
    if (AppHtmlElementAdapter.isInitialized) return;

    AppHtmlElementAdapter.timestamp = new Date().getTime();
    AppHtmlElementAdapter.isInitialized = true;

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
    return `${name}-${AppHtmlElementAdapter.timestamp.toString()}`;
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
      throw new Error(`#${name} element can not be found`);
    }
    return htmlElement;
  }
}
