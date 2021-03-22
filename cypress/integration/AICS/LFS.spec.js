// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://10.20.30.124:8480/ChatWeb/chat#");
  });

  it("頁面開啟", () => {
    // 關閉無痕的問題
    cy.wait(1000);
    cy.get(
      "#divPrivacyPolicyModal > .ui-contextop > .ui-all > .smart_open > .subview_all > .sub_button > .tag"
    ).click({ force: true });
    cy.wait(5000);
    cy.get(".input").type("我的東西不見了", { force: true });
    cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
      force: true,
    });

    cy.wait(3000);
    cy.get(".input").type("線上報失", { force: true });
    cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
      force: true,
    });
    cy.wait(3000);
    cy.get(".input").type("曾小魚", { force: true });
    cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
      force: true,
    });
    cy.wait(3000);
    cy.get(".input").type("輸入手機號碼", { force: true });
    cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
      force: true,
    });
    cy.wait(3000);
    cy.get(".input").type("0911756824", { force: true });
    cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
      force: true,
    });
    cy.wait(5000);
    cy.get(".input").type("相機", { force: true });
    cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
      force: true,
    });
    cy.wait(3000);
    cy.get(".input").type("NiKonD850 27-70MM F2.8 固定光圈變焦", {
      force: true,
    });
    cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
      force: true,
    });
    cy.wait(3000);
    cy.get(".input").type("今天", {
      force: true,
    });
    cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
      force: true,
    });
    cy.wait(3000);

    cy.get(".input").type("列車", {
      force: true,
    });
    cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
      force: true,
    });
    cy.wait(3000);
    cy.get(".input").type("813車次", {
      force: true,
    });
    cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
      force: true,
    });
    cy.wait(3000);
    cy.get(".input").type("8 車 10 A；7 車廁所", {
      force: true,
    });
    cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
      force: true,
    });
    cy.wait(3000);
    cy.get(".input").type("台中站", {
      force: true,
    });
    cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
      force: true,
    });
    cy.wait(3000);
    cy.get(".input").type("正確", {
      force: true,
    });
    cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
      force: true,
    });
    cy.wait(5000);
    cy.get(
      ":nth-child(2) > .subview_inner > .subview_box > .sub_input > .form-control"
    ).type("123456", {
      force: true,
    });
    cy.get('#divMobileLoginModal > .ui-contextop > .ui-all > .smart_open > :nth-child(2) > .sub_button > .tag').click({ force: true });
  });
});
