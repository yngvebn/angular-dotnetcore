using Microsoft.AspNetCore.Mvc.Razor;
using System.Collections.Generic;
using System.Linq;
using System.Text.Encodings.Web;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Logging;
using System;
public class WwwRootViewEngine : IViewLocationExpander
{
    public void PopulateValues(ViewLocationExpanderContext context)
    { }

    public virtual IEnumerable<string> ExpandViewLocations(ViewLocationExpanderContext context, IEnumerable<string> viewLocations)
    {
        //Replace folder view with CustomViews
        return viewLocations.Select(f => f.Replace("/Views/", "/wwwroot/dist/"));
    }
}
