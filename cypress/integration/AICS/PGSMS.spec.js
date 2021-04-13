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
        cy.get(".input").type("乘車導引", { force: true });
        cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
            force: true,
        });

        cy.wait(3000);
        cy.get(".input").type("申請乘車導引", { force: true });
        cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
            force: true,
        });
        cy.wait(3000);
        cy.get(".input").type("繼續申請", { force: true });
        cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
            force: true,
        });
        cy.wait(3000);
        cy.get(".input").type("同意", { force: true });
        cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
            force: true,
        });
        cy.wait(3000);
        cy.get(".input").type("搭乘旅客手機", { force: true });
        cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
            force: true,
        });
        cy.wait(3000);
        cy.get('#divMobileLoginModal > .ui-contextop > .ui-all > .smart_open > :nth-child(1) > .subview_inner > .subview_box > .sub_input > .form-control')
            .type("0911756824", {
                force: true,
            });
        cy.get('#divMobileLoginModal > .ui-contextop > .ui-all > .smart_open > :nth-child(1) > .sub_button > .tag')
            .click({
                force: true,
            });
        cy.get(':nth-child(2) > .subview_inner > .subview_box > .sub_input > .form-control')
            .type("123456", {
                force: true,
            });
        cy.get('#divMobileLoginModal > .ui-contextop > .ui-all > .smart_open > :nth-child(2) > .sub_button> .tag')
            .click({
                force: true,
            });

        cy.wait(3000);
        cy.get(".input").type("不需要", { force: true });
        cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
            force: true,
        });

        cy.wait(3000);
        cy.get(".input").type("小高高", { force: true });
        cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
            force: true,
        });

        cy.wait(3000);
        cy.get(".input").type("先生", { force: true });
        cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
            force: true,
        });

        cy.wait(3000);
        cy.get(".input").type("台北到台中", { force: true });
        cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
            force: true,
        });

        cy.wait(5000);
        cy.get(".input").type("台北站", { force: true });
        cy.get('[avalon-events="click:eclick_0_64clickSendMsg"]').click({
            force: true,
        });

        cy.wait(3000);
        // 最後窗體觸摸
        cy.get('#GuideRequestModal > .ui-contextop > .ui-all > :nth-child(2) > :nth-child(1) > .subview_inner > :nth-child(1) > .sub_input > .form-control')
            .click({
                blur: true,
            });

        /** 調整時間 */
        cy.get('#region1600')
        cy.get(':nth-child(5) > .subview_all > .sub_button > .tag')
            .click({
                force: true,
            });


        cy.get('#GuideRequestModal > .ui-contextop > .ui-all > :nth-child(2) > :nth-child(1) > .subview_inner > :nth-child(2) > .sub_input > .form-control')
            .type("1241", {
                force: true,
            });

        cy.get('#GuideRequestModal > .ui-contextop > .ui-all > :nth-child(2) > :nth-child(1) > .subview_inner > :nth-child(3) > :nth-child(1) > .form-control')
            .type("09", {
                force: true,
            });

        cy.get(':nth-child(3) > :nth-child(2) > .form-control')
            .type("12C", {
                force: true,
            });

        cy.contains('下一步')
            .click({
                force: true,
            });
        cy.wait(3000);
        // 選擇導引方式
        cy.get(':nth-child(2) > .subview_inner > :nth-child(3) > .select_need')
            .click({
                force: true,
            });

        // 下一步
        cy.get(':nth-child(2) > .sub_button > :nth-child(2) > .tag')
            .click({
                force: true,
            });
        cy.wait(3000);
        // 身心不便
        cy.get(':nth-child(3) > .subview_inner > :nth-child(2) > .select_need')
            .click({
                force: true,
            });
        // 下一步
        cy.get('#GuideRequestModal > .ui-contextop > .ui-all > :nth-child(2) > :nth-child(3) > .sub_button > .tag')
            .click({
                force: true,
            });
    });
});
