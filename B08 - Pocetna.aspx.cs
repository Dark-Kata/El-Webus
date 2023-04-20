using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Web;
using System.Web.Configuration;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;
using System.Data.Sql;
using System.Data.SqlClient;

namespace WebApplication1
{
    public partial class WebForm1 : System.Web.UI.Page
    {

        protected bool ProveriMejl(string mejl)
        {
            try
            {
                MailAddress m = new MailAddress(mejl);
                return true;
            }
            catch
            {
                return false;
            }
        }

        protected void Button1_Click1(object sender, EventArgs e)
        {
            if (TextBox4.Text == "" || TextBox5.Text == "" || TextBox1.Text == "")
            {
                Label6.Text = "Neuspesno";
                return;
            }
            if (!ProveriMejl(TextBox5.Text))
            {
                Label6.Text = "Niste uneli ispravan mail";
            }
            string ks = ConfigurationManager.ConnectionStrings["KomentariConnectionString"].ConnectionString;
            SqlConnection Kon = new SqlConnection(ks);
            SqlCommand Kom = new SqlCommand("INSERT INTO Utisak (Ime, Email, Komentar) VALUES (@i, @e, @k)", Kon);
            Kom.Parameters.AddWithValue("@i", TextBox4.Text);
            Kom.Parameters.AddWithValue("@e", TextBox5.Text);
            Kom.Parameters.AddWithValue("@k", TextBox1.Text);
            try
            {
                Kon.Open();
                Kom.ExecuteNonQuery();
                Label6.Text = "Uspesno";
                TextBox1.Text = TextBox4.Text = TextBox5.Text = "";
            } finally
            {
                Kon.Close();
            }
        }
    }
}