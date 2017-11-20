import Card from './components/Card.vue';
import TaxBill from './components/TaxBill.vue';
import CashReceipt from './components/CashReceipt.vue';
import ManageBankbook from './components/ManageBankbook.vue';
import VueRouter from 'vue-router';

const router = new VueRouter({
    routes : [
        { path : '/', component : Card },
        { path : '/card', component : Card },
        { path : '/tax_bill', component : TaxBill },
        { path : '/cash_rct', component : CashReceipt },
        { path : '/mng_bankbook', component : ManageBankbook }
    ]
})

export default router;