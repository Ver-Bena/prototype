<template>
    <table>
        <tr v-for="m in manageBankbook" :key="m.id">
            <td>{{m.은행명}}</td>
            <td>{{m.계좌번호}}</td>
            <td>{{m.날짜}}</td>
            <td>{{m.적요}}</td>
            <td>{{m.입금액}}</td>
            <td>{{m.출금액}}</td>
            <td>{{m.계정분류}}</td>
        </tr>
    </table>
</template>

<script>

export default {
    data : function() {
      return {
            manageBankbook : [
                {
                    "은행명" : "국민은행",
                    "계좌번호" : "126523011-02-001",
                    "날짜" : "17.08.26",
                    "적요" : "",
                    "입금액" : 30000,
                    "출금액" : 0,
                    "계정분류" : [ "외상매출금 입금", "대표자입금", "계좌대체", "차입금입금", "입력 : XXXX" ]
                },
                {
                    "은행명" : "국민은행",
                    "계좌번호" : "126523011-02-001",
                    "날짜" : "17.08.26",
                    "적요" : "",
                    "입금액" : 0,
                    "출금액" : 13000,
                    "계정분류" : [ "외상매출금 입금", "대표자입금", "계좌대체", "차입금입금", "입력 : XXXX" ]
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
