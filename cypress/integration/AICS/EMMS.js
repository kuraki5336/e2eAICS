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
        cy.get(".input").type("會員服務", { force: true });
        cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
            force: true,
        });

        cy.wait(3000);
        cy.get(".input").type("企業會員服務", { force: true });
        cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
            force: true,
        });
        cy.wait(3000);
        cy.get(".input").type("查詢企業會員資格", { force: true });
        cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
            force: true,
        });
        cy.wait(3000);
        cy.get(".input").type("27714944", { force: true });
        cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
            force: true,
        });

        //   個人會員服務
        cy.wait(3000);
        cy.get(".input").type("個人會員服務", { force: true });
        cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
            force: true,
        });
        cy.wait(5000);
        cy.get(".input").type("查詢紅利點數", { force: true });
        cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
            force: true,
        });
        cy.wait(3000);
        cy.get(".input").type("前往查詢", {
            force: true,
        });
    });
});
