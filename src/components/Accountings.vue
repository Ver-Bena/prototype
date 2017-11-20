<template>
    <div id="accounting-app">
        <tabs></tabs>
        <tables></tables>
    </div>
</template>

<script>
import Tables from './Tables.vue';
import Tabs from './Tabs.vue';

export default {
    name: 'accountings',
    components : { Tables, Tabs },
    data : function() {
        return {
            tabs : [ "카드", "세금계산서", "현금영수증", "통장관리" ]
        }
    }
}
</script>

<style>
    a { text-decoration: none; color: #000; }
    .accounting-tab { background-color: #fff; border: 1px solid navy; }
</style>
