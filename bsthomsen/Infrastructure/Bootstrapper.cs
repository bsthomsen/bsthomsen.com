using Nancy;
using Nancy.Bootstrapper;
using Nancy.Conventions;
using Nancy.TinyIoc;

namespace bsthomsen.Infrastructure
{
    public class Bootstrapper : DefaultNancyBootstrapper
    {
        protected override void ConfigureConventions(NancyConventions conventions)
        {
            conventions.StaticContentsConventions.Clear();
            conventions.StaticContentsConventions.Add(StaticContentConventionBuilder.AddDirectory("/", "/wwwroot"));
            base.ConfigureConventions(conventions);
        }

        protected override void ApplicationStartup(TinyIoCContainer container, IPipelines pipelines)
        {
            base.ApplicationStartup(container, pipelines);

            pipelines.AfterRequest.InsertAfter("EncodingFix", nancyContext =>
            {
                if (nancyContext.Response.ContentType == "text/html")
                    nancyContext.Response.ContentType = "text/html; charset=utf-8";
            });
        }

        protected override byte[] FavIcon
        {
            get { return null; }
        }
    }
}