<template>
    <div>
        <button class="accounting-tab">
          <router-link to="/card">{{tabs[0]}}</router-link>
        </button>

        <button class="accounting-tab">
            <router-link to="/tax_bill">{{tabs[1]}}</router-link>
        </button>

        <button class="accounting-tab">
            <router-link to="/cash_rct">{{tabs[2]}}</router-link>
        </button>

        <button class="accounting-tab">
            <router-link to="/mng_bankbook">{{tabs[3]}}</router-link>
        </button>
      </div>
</template>

<script>

export default {
    name : 'tabs',
    data : function() {
        return {
            tabs : [ "카드", "세금계산서", "현금영수증", "통장관리" ]
        }
    }
}
</script>