<template>
    <table>
        <tr v-for="c in cashReceipt" :key="c.id">
            <td>{{c.구분}}</td>
            <td>{{c.날짜}}</td>
            <td>{{c.품명}}</td>
            <td>{{c.거래처}}</td>
            <td>{{c.금액}}</td>
            <td>{{c.계정분류}}</td>
        </tr>
    </table>
</template>

<script>

export default {
    data : function() {
      return {
            cashReceipt : [
                {
                    "구분" : "매출",
                    "날짜" : "17.02.13 21:21",
                    "품명" : "전기요금",
                    "거래처" : "한국전력공사",
                    "금액" : 1234654,
                    "계정분류" : [ "소모품비", "복리후생", "지급수수료", "입력 : XXXX" ]
                },
                {
                    "구분" : "매입",
                    "날짜" : "17.02.13 21:21",
                    "품명" : "전기요금",
                    "거래처" : "한국전력공사",
                    "금액" : 5645635,
                    "계정분류" : [ "소모품비", "복리후생", "지급수수료", "입력 : XXXX" ]
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
