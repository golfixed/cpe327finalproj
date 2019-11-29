import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: () => ({
        orderList: [],
        orderList_Alacarte: [],
        orderList_Appitizer: [],
        orderList_Drink: [],
        cookList_InComing: [],
        cookList_Cooking: [],
        cookList_Done: [],
        billList: [],
        menuList: {
            menu_promotion: {
                en: [{
                        _id: 0,
                        pictureURL: './static/img/promotions/en1.png'
                    },
                    {
                        _id: 1,
                        pictureURL: './static/img/promotions/en2.png'
                    },
                    {
                        _id: 2,
                        pictureURL: './static/img/promotions/en3.png'
                    }
                ],
                th: [{
                        _id: 0,
                        pictureURL: './static/img/promotions/th1.png'
                    },
                    {
                        _id: 1,
                        pictureURL: './static/img/promotions/th2.png'
                    },
                    {
                        _id: 2,
                        pictureURL: './static/img/promotions/th3.png'
                    }
                ]
            },
            menu_deal: {
                en: [{
                        _id: 0,
                        pictureURL: "./static/img/deals/en1.png"
                    },
                    {
                        _id: 1,
                        pictureURL: "./static/img/deals/en2.png"
                    },
                    {
                        _id: 2,
                        pictureURL: "./static/img/deals/en3.png"
                    },
                ],
                th: [{
                        _id: 0,
                        pictureURL: "./static/img/deals/th1.png"
                    },
                    {
                        _id: 1,
                        pictureURL: "./static/img/deals/th2.png"
                    },
                    {
                        _id: 2,
                        pictureURL: "./static/img/deals/th3.png"
                    },
                ]
            },
            menu_alacarte: {
                en: [{
                        _id: 1,
                        itemTitle: "Chicken",
                        price: 3.99,
                        pictureURL: "./static/img/alacarte/01.png"
                    },
                    {
                        _id: 2,
                        itemTitle: "Fish Rice",
                        price: 8.99,
                        pictureURL: "./static/img/alacarte/02.png"
                    },
                    {
                        _id: 3,
                        itemTitle: "Burger",
                        price: 12.99,
                        pictureURL: "./static/img/alacarte/03.png"
                    },
                    {
                        _id: 4,
                        itemTitle: "Chicken",
                        price: 2.99,
                        pictureURL: "./static/img/alacarte/04.png"
                    },
                    {
                        _id: 5,
                        itemTitle: "Burger",
                        price: 9.99,
                        pictureURL: "./static/img/alacarte/05.png"
                    },
                    {
                        _id: 6,
                        itemTitle: "Burger",
                        price: 3.99,
                        pictureURL: "./static/img/alacarte/06.png"
                    },
                    {
                        _id: 7,
                        itemTitle: "Spicy",
                        price: 3.99,
                        pictureURL: "./static/img/alacarte/07.png"
                    },
                    {
                        _id: 8,
                        itemTitle: "Chicken",
                        price: 3.99,
                        pictureURL: "./static/img/alacarte/01.png"
                    },
                    {
                        _id: 9,
                        itemTitle: "Chicken",
                        price: 3.99,
                        pictureURL: "./static/img/alacarte/01.png"
                    },
                ],
                th: [{
                        _id: 1,
                        itemTitle: "ไก่กรอบ",
                        price: 5.99,
                        pictureURL: "./static/img/alacarte/01.png"
                    },
                    {
                        _id: 2,
                        itemTitle: "ปลากรอบ",
                        price: 12.99,
                        pictureURL: "./static/img/alacarte/02.png"
                    },
                    {
                        _id: 3,
                        itemTitle: "เบอร์เกอร์",
                        price: 14.99,
                        pictureURL: "./static/img/alacarte/03.png"
                    },
                    {
                        _id: 4,
                        itemTitle: "ไก่นุ่ม",
                        price: 7.99,
                        pictureURL: "./static/img/alacarte/04.png"
                    },
                    {
                        _id: 5,
                        itemTitle: "เบอร์เกอร์",
                        price: 15.99,
                        pictureURL: "./static/img/alacarte/05.png"
                    },
                    {
                        _id: 6,
                        itemTitle: "เบอร์เกอร์",
                        price: 8.99,
                        pictureURL: "./static/img/alacarte/06.png"
                    },
                    {
                        _id: 7,
                        itemTitle: "เผ็ดแซ่บ",
                        price: 12.99,
                        pictureURL: "./static/img/alacarte/07.png"
                    },
                    {
                        _id: 8,
                        itemTitle: "ไก่กรอบ",
                        price: 5.99,
                        pictureURL: "./static/img/alacarte/01.png"
                    },
                    {
                        _id: 9,
                        itemTitle: "ไก่กรอบ",
                        price: 5.99,
                        pictureURL: "./static/img/alacarte/01.png"
                    },
                ]
            },
            menu_appitizer: {
                en: [{
                        itemTitle: "Egg Tart",
                        price: 3.99,
                        pictureURL: "./static/img/appi/01.png"
                    },
                    {
                        itemTitle: "Wingsabb",
                        price: 8.99,
                        pictureURL: "./static/img/appi/02.png"
                    },
                    {
                        itemTitle: "Shrimp",
                        price: 12.99,
                        pictureURL: "./static/img/appi/03.png"
                    },
                    {
                        itemTitle: "Chicken Pop",
                        price: 2.99,
                        pictureURL: "./static/img/appi/04.png"
                    },
                    {
                        itemTitle: "Nuggets",
                        price: 9.99,
                        pictureURL: "./static/img/appi/05.png"
                    },
                    {
                        itemTitle: "Coslow",
                        price: 3.99,
                        pictureURL: "./static/img/appi/06.png"
                    },
                    {
                        itemTitle: "Mashed(M)",
                        price: 10.99,
                        pictureURL: "./static/img/appi/07.png"
                    },
                    {
                        itemTitle: "Mashed(L)",
                        price: 8.99,
                        pictureURL: "./static/img/appi/08.png"
                    },
                    {
                        itemTitle: "Value",
                        price: 20.99,
                        pictureURL: "./static/img/appi/09.png"
                    }
                ],
                th: [{
                        itemTitle: "ทาร์ตไข่",
                        price: 5.99,
                        pictureURL: "./static/img/appi/01.png"
                    },
                    {
                        itemTitle: "วิงซ์แซ่บ",
                        price: 12.99,
                        pictureURL: "./static/img/appi/02.png"
                    },
                    {
                        itemTitle: "โดนัทกุ้ง",
                        price: 14.99,
                        pictureURL: "./static/img/appi/03.png"
                    },
                    {
                        itemTitle: "ไก่ป๊อป",
                        price: 7.99,
                        pictureURL: "./static/img/appi/04.png"
                    },
                    {
                        itemTitle: "นักเก็ต",
                        price: 15.99,
                        pictureURL: "./static/img/appi/05.png"
                    },
                    {
                        itemTitle: "โควสลอร์",
                        price: 8.99,
                        pictureURL: "./static/img/appi/06.png"
                    },
                    {
                        itemTitle: "มันบด(M)",
                        price: 12.99,
                        pictureURL: "./static/img/appi/07.png"
                    },
                    {
                        itemTitle: "มันบด(L)",
                        price: 8.99,
                        pictureURL: "./static/img/appi/08.png"
                    },
                    {
                        itemTitle: "ชุดคุ้ม",
                        price: 20.99,
                        pictureURL: "./static/img/appi/09.png"
                    }
                ]
            },
            menu_drink: {
                en: [{
                        itemTitle: "Original (140oz)",
                        price: 3.99,
                        pictureURL: "./static/img/drinks/01.png"
                    },
                    {
                        itemTitle: "Sugarless (140oz)",
                        price: 8.99,
                        pictureURL: "./static/img/drinks/02.png"
                    },
                    {
                        itemTitle: "Bottle",
                        price: 12.99,
                        pictureURL: "./static/img/drinks/03.png"
                    },
                    {
                        itemTitle: "Diet (0.5L)",
                        price: 2.99,
                        pictureURL: "./static/img/drinks/04.png"
                    },
                    {
                        itemTitle: "Original (0.5L)",
                        price: 9.99,
                        pictureURL: "./static/img/drinks/05.png"
                    },
                    {
                        itemTitle: "Original (1L)",
                        price: 3.99,
                        pictureURL: "./static/img/drinks/06.png"
                    },
                    {
                        itemTitle: "Max (0.5L)",
                        price: 10.99,
                        pictureURL: "./static/img/drinks/07.png"
                    },
                    {
                        itemTitle: "Max (1L)",
                        price: 8.99,
                        pictureURL: "./static/img/drinks/08.png"
                    },
                    {
                        itemTitle: "Value Pack",
                        price: 20.99,
                        pictureURL: "./static/img/drinks/09.png"
                    }
                ],
                th: [{
                        itemTitle: "ดั้งเดิม (140oz)",
                        price: 5.99,
                        pictureURL: "./static/img/drinks/01.png"
                    },
                    {
                        itemTitle: "น้ำตาลน้อย (140oz)",
                        price: 12.99,
                        pictureURL: "./static/img/drinks/02.png"
                    },
                    {
                        itemTitle: "กระป๋อง",
                        price: 14.99,
                        pictureURL: "./static/img/drinks/03.png"
                    },
                    {
                        itemTitle: "ไดเอท",
                        price: 7.99,
                        pictureURL: "./static/img/drinks/04.png"
                    },
                    {
                        itemTitle: "ดั้งเดิม(0.5L)",
                        price: 15.99,
                        pictureURL: "./static/img/drinks/05.png"
                    },
                    {
                        itemTitle: "ดั้งเดิม(1L)",
                        price: 8.99,
                        pictureURL: "./static/img/drinks/06.png"
                    },
                    {
                        itemTitle: "น้ำตาลน้อย(0.5)",
                        price: 12.99,
                        pictureURL: "./static/img/drinks/07.png"
                    },
                    {
                        itemTitle: "น้ำตาลน้อย(1L)",
                        price: 8.99,
                        pictureURL: "./static/img/drinks/08.png"
                    },
                    {
                        itemTitle: "ชุดสุดคุ้ม",
                        price: 20.99,
                        pictureURL: "./static/img/drinks/09.png"
                    }
                ]
            },
        },
        isDetailOpen: false,
        tableNumber: 1,
        orderNumber: 1

    }),
    mutations: {
        //Restart Prototype
        RESTART: (state) => {
            state.orderList = [];
            state.orderList_Alacarte = [];
            state.orderList_Appitizer = [];
            state.orderList_Drink = [];
            state.cookList_InComing = [];
            state.cookList_Cooking = [];
            state.cookList_Done = [];
            state.billList = [];
            state.isDetailOpen = false;
            state.tableNumber = 1;
            state.orderNumber = 1;
        },

        //Order List
        UPDATE_ORDERLIST: (state, payload) => {
            if (payload.length !== 0) {
                if (payload.type == 'set') state.orderList.push(payload);
                else if (payload.type == 'alacarte') state.orderList_Alacarte.push(payload);
                else if (payload.type == 'appitizer') state.orderList_Appitizer.push(payload);
                else if (payload.type == 'drink') state.orderList_Drink.push(payload);
            } else {
                //Do nothing
            }
        },
        CLEARALL_ORDERLIST: (state) => {
            state.orderList = [];
            state.orderList_Alacarte = [];
            state.orderList_Appitizer = [];
            state.orderList_Drink = [];
        },
        DELETE_SET: (state, index) => {
            const listcount = state.orderList.length;
            if (listcount >= 2) {
                state.orderList.splice(index, 1);
            } else if (listcount == 1) {
                state.orderList = [];
            } else {
                //Do nothing
            }
        },
        DELETE_ITEM: (state, {
            index,
            method
        }) => {
            const count_alacarte = state.orderList_Alacarte.length;
            const count_appitizer = state.orderList_Appitizer.length;
            const count_drink = state.orderList_Drink.length;
            if (method == 'alacarte' && count_alacarte !== 0) state.orderList_Alacarte.splice(index, 1);
            else if (method == 'appitizer' && count_appitizer !== 0) state.orderList_Appitizer.splice(index, 1);
            else if (method == 'drink' && count_drink !== 0) state.orderList_Drink.splice(index, 1);
            else {
                //Do nothing
            }
        },
        PLACE_ORDER: (state) => {
            var order = {
                tableNumber: state.tableNumber,
                orderNumber: state.orderNumber,
                set: state.orderList,
                alacarte: state.orderList_Alacarte,
                appitizer: state.orderList_Appitizer,
                drink: state.orderList_Drink
            }
            state.cookList_InComing.push(order);
            state.tableNumber = state.tableNumber + 1;
            state.orderNumber = state.orderNumber + 1;
        },

        COOKER_GETCOOK: (state) => {
            state.cookList_Cooking.push(state.cookList_InComing[0]);
            state.cookList_InComing.splice(0, 1);
        },

        COOKER_COOKED: (state) => {
            state.cookList_Done.push(state.cookList_Cooking[0]);
            state.cookList_Cooking.splice(0, 1);
            state.COOKER_COOKED;
        },

        BILL_CHECK: (state) => {
            state.billList = state.cookList_Done;
            // var billInfo = state.billList[0];

            // var total_set = 0;
            // for (var i = 0; i < $scope.billInfo.set.length; i++) {
            //     total_set = total_set + $scope.billInfo.set[i].price;
            // }

        },

        //Display and Toggle
        DETAILPANEL_TOGGLE: (state, command) => {
            if (command == true) {
                state.isDetailOpen = true;
            } else {
                state.isDetailOpen = false;
            }
        }
    }
})

export default store