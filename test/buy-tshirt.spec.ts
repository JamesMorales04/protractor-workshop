import { browser } from 'protractor';
import {
  MenuContentPage, ProductListPage, ProductAddedModalPage, SummaryStepPage,
  SignInStepPage, AddressStepPage, ShippingStepPage, PaymentStepPage,
  BankPaymentPage, OrderSummaryPage,
} from '../src/page';

describe('Go to a shopping page', () => {
  beforeAll(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('http://automationpractice.com/');
  });
  describe('Buy a t-shirt process', () => {
    beforeAll(async () => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productListPage: ProductListPage = new ProductListPage();
      const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
      const summaryStepPage: SummaryStepPage = new SummaryStepPage();
      await menuContentPage.goToTShirtMenu();
      await productListPage.selectProduct('Faded Short Sleeve T-shirts');
      await productListPage.addToCart();
      await productAddedModalPage.goToSummaryMenu();
      await summaryStepPage.goToSignInMenu();
    });
    describe('Login process', () => {
      beforeAll(async () => {
        const signInStepPage: SignInStepPage = new SignInStepPage();
        await signInStepPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');
      });
      describe('Choosing address and shipping', () => {
        beforeAll(async () => {
          const addressStepPage: AddressStepPage = new AddressStepPage();
          const shippingStepPage: ShippingStepPage = new ShippingStepPage();
          await addressStepPage.goToShippingStepMenu();
          await shippingStepPage.goToPaymentMenu();
        });
        describe('Bank Payment', () => {
          beforeAll(async () => {
            const paymentStepPage: PaymentStepPage = new PaymentStepPage();
            const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
            await paymentStepPage.goToBankPaymentMenu();
            await bankPaymentPage.goToOrderSummaryMenu();
          });
          it('then should be bought a t-shirt', async () => {
            const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
            await expect(orderSummaryPage.goToProcessComplete()).toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
