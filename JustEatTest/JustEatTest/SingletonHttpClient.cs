using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Net.Http.Headers;

namespace JustEatTest
{
    public class SingletonHttpClient : HttpClient
    {

        private static readonly SingletonHttpClient instance = new SingletonHttpClient();

        static SingletonHttpClient()
        {
            instance.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", "VGVjaFRlc3Q6bkQ2NGxXVnZreDVw");
            instance.DefaultRequestHeaders.Host = "public.je-apis.com";
            instance.DefaultRequestHeaders.Add("Accept-Tenant","uk");
            instance.DefaultRequestHeaders.Add("Accept-Language","en-GB");
        }

        private SingletonHttpClient() : base()
        {
            Timeout = TimeSpan.FromMilliseconds(15000);
        }

        public static SingletonHttpClient Instance
        {
            get
            {
                return instance;
            }
        }
    }
}