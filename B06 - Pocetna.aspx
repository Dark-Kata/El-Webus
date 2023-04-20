<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Pocetna.aspx.cs" Inherits="WebApplication1.Stranice.Pocetna" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Uspeh Učenika</title>
    <link href="../CSS/Style.css" rel="stylesheet" />
</head>
<body>
    <h1>USPEH UČENIKA</h1>
        <table id="nav">
        <tr>
            <th class="thh"><a class="Navi" href="Pocetna.aspx">Početna</a></th>
            <th class="thh"><a class="Navi" href="Grafika.aspx">Grafika</a></th>
            <th class="thh"><a class="Navi" href="O Autoru.aspx">O Autoru</a></th>
        </tr>
    </table>
    <br />
    <form id="form1" runat="server">
        <div>
            <asp:GridView ID="GridView1" runat="server" AllowPaging="True" AllowSorting="True" AutoGenerateColumns="False" DataSourceID="SqlDataSource1">
                <Columns>
                    <asp:BoundField DataField="Razred" HeaderText="Razred" SortExpression="Razred" />
                    <asp:BoundField DataField="Odlican" HeaderText="Odlican" SortExpression="Odlican" />
                    <asp:BoundField DataField="Vrlodobar" HeaderText="Vrlodobar" SortExpression="Vrlodobar" />
                    <asp:BoundField DataField="Dobar" HeaderText="Dobar" SortExpression="Dobar" />
                    <asp:BoundField DataField="Dovoljan" HeaderText="Dovoljan" SortExpression="Dovoljan" />
                    <asp:BoundField DataField="Nedovoljan" HeaderText="Nedovoljan" SortExpression="Nedovoljan" />
                    <asp:BoundField DataField="ProsOcena" HeaderText="ProsOcena" SortExpression="ProsOcena" />
                </Columns>
            </asp:GridView>
            <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:SkolaConnectionString %>" ProviderName="<%$ ConnectionStrings:SkolaConnectionString.ProviderName %>" SelectCommand="SELECT * FROM [Uspeh]"></asp:SqlDataSource>
        </div>
    </form>
</body>
</html>
