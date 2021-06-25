import { browser } from 'protractor';
import {
  MenuContentPage, ProductListPage, ProductAddedModalPage, SummaryStepPage,
  SignInStepPage, AddressStepPage, ShippingStepPage, PaymentStepPage,
  BankPaymentPage, OrderSummaryPage,
} from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 210000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('http://automationpractice.com/');
    await (browser.sleep(12000));
    await menuContentPage.goToTShirtMenu();
    await (browser.sleep(6000));
    await productListPage.goToAddToCartMenu();
    await (browser.sleep(8000));
    await productAddedModalPage.goToSummaryMenu();
    await (browser.sleep(6000));
    await summaryStepPage.goToSignInMenu();
    await (browser.sleep(6000));
    await signInStepPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');
    await (browser.sleep(6000));
    await addressStepPage.goToShippingStepMenu();
    await (browser.sleep(6000));
    await shippingStepPage.goToPaymentMenu();
    await (browser.sleep(6000));
    await paymentStepPage.goToBankPaymentMenu();
    await (browser.sleep(6000));
    await bankPaymentPage.goToOrderSummaryMenu();
    await (browser.sleep(6000));
    await expect(orderSummaryPage.goToProcessComplete()).toBe('Your order on My Store is complete.');
  });
});
