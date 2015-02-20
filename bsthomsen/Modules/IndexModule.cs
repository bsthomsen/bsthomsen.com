using Nancy;

namespace bsthomsen.Modules
{
    public class IndexModule : NancyModule
    {
        public IndexModule() : base("/")
        {
            Get["/"] = _ => Response.AsFile("wwwroot/index.html", "text/html"); ;
        }
    }
}