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
  it('then should be bought a t-shirt', async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await productListPage.goToAddToCartMenu();
    await (browser.sleep(6000));
    await productAddedModalPage.goToSummaryMenu();
    await summaryStepPage.goToSignInMenu();
    await signInStepPage.goToAddressMenu('aperdomobo@gmail.com', 'WorkshopProtractor');
    await addressStepPage.goToShippingStepMenu();
    await shippingStepPage.goToPaymentMenu();
    await paymentStepPage.goToBankPaymentMenu();
    await bankPaymentPage.goToOrderSummaryMenu();
    await expect(orderSummaryPage.goToProcessComplete()).toBe('Your order on My Store is complete.');
  });
});
