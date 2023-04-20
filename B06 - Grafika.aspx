<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Grafika.aspx.cs" Inherits="WebApplication1.Stranice.Grafika" %>

<%@ Register assembly="System.Web.DataVisualization, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" namespace="System.Web.UI.DataVisualization.Charting" tagprefix="asp" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Grafika</title>
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
            <asp:Chart ID="Chart1" runat="server" DataSourceID="SqlDataSource1">
                <series>
                    <asp:Series Name="Series1" XValueMember="Razred" YValueMembers="ProsOcena">
                    </asp:Series>
                </series>
                <chartareas>
                    <asp:ChartArea Name="ChartArea1">
                    </asp:ChartArea>
                </chartareas>
            </asp:Chart>
            <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:SkolaConnectionString %>" SelectCommand="SELECT [Razred], [ProsOcena] FROM [Uspeh]"></asp:SqlDataSource>
        </div>
    </form>
</body>
</html>
