<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Pocetna.aspx.cs" Inherits="WebApplication1.WebForm1" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Pocetna</title>
    <link href="../JS%20i%20CSS/Style.css" rel="stylesheet" />
    <script src="../JS%20i%20CSS/JS.js"></script>
</head>
<body>
    <h1>KNJIGA UTISAKA</h1>
    <table>
        <tr>
            <th class="Navi"><a href="Pocetna.aspx">Pocetna</a></th>
            <th class="Navi"><a href="O Autoru.aspx">O autoru</a></th>
            <th class="Navi"><a href="Uputstsvo.aspx">Uputstvo</a></th>
        </tr>
    </table>
    <form id="form1" runat="server">
        <div class="text">
            <asp:Label ID="Label1" runat="server" Text="Ime: " CssClass="newStyle1"></asp:Label>
            <br />
            <br />
            <asp:Label ID="Label4" runat="server" Text="Email:" CssClass="newStyle1"></asp:Label>
            <br />
            <br />
            <asp:Label ID="Label5" runat="server" Text="Komentar:" CssClass="newStyle1"></asp:Label>
        </div>
        <div class="forme">
            <asp:TextBox ID="TextBox4" runat="server"></asp:TextBox>
            <br />
            <br />
            <asp:TextBox ID="TextBox5" runat="server"></asp:TextBox>
            <br />
            <br />
            <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
            <br />
            <asp:Label ID="Label6" runat="server"></asp:Label>
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <asp:Button ID="Button1" runat="server" Text="Dodaj Komentar" OnClick="Button1_Click1"/>
        </div>
    <footer>
        <p>&copy Muzej Srbije</p>
    </footer>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:KomentariConnectionString %>" ProviderName="<%$ ConnectionStrings:KomentariConnectionString.ProviderName %>" SelectCommand="SELECT * FROM [Utisak]"></asp:SqlDataSource>
    </form>
    </body>
</html>
