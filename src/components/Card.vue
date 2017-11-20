<template>
    <table>
        <tr v-for="c in card" :key="c.id">
            <td>{{c.구분}}</td>
            <td>{{c.카드번호}}</td>
            <td>{{c.카드사}}</td>
            <td>{{c.날짜}}</td>
            <td>{{c.적요}}</td>
            <td>{{c.거래처}}</td>
            <td>{{c.금액}}</td>
            <td>{{c.계정분류추천}}</td>
        </tr>
    </table>
</template>

<script>

export default {
    data : function() {
        return {
            card : [
                {
                    "구분" : "매출",
                    "카드번호" : "1312-1231-123",
                    "카드사" : "Master Card",
                    "날짜" : "17.02.13 21:21",
                    "적요" : "전기요금",
                    "거래처" : "한국전력공사",
                    "금액" : 13200,
                    "계정분류추천" : [ "소모품비", "복리후생", "지급수수료", "입력 : XXXX" ]
                },
                {
                    "구분" : "매입",
                    "카드번호" : "1312-1231-123",
                    "카드사" : "Master Card",
                    "날짜" : "17.02.13 21:21",
                    "적요" : "전기요금",
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
