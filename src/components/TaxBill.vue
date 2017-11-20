<template>
    <table>
        <tr v-for="t in taxBill" :key="t.id">
            <td>{{t.구분}}</td>
            <td>{{t.날짜}}</td>
            <td>{{t.품명}}</td>
            <td>{{t.거래처}}</td>
            <td>{{t.금액}}</td>
            <td>{{t.계정분류추천}}</td>
        </tr>
    </table>
</template>

<script>

export default {
    data : function() {
      return {
            taxBill : [
                {
                    "구분" : "매출",
                    "날짜" : "17.02.13 21:21",
                    "품명" : "전기요금",
                    "거래처" : "한국전력공사",
                    "금액" : 13200,
                    "계정분류추천" : [ "소모품비", "복리후생", "지급수수료", "입력 : XXXX" ]
                },
                {
                    "구분" : "매입",
                    "날짜" : "17.02.13 21:21",
                    "품명" : "전기요금",
                    "거래처" : "한국전력공사",
                    "금액" : 30000,
                    "계정분류추천" : [ "소모품비", "복리후생", "지급수수료", "입력 : XXXX" ]
                }
            ]
        }
    },
}
</script>

<style>
    table, tr, td { border: 1px solid black; border-collapse: collapse; }
    table { margin-top: 10px; }
    td { padding: 10px; }
</style>
