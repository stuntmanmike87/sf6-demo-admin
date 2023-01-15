<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* admin/includes/settings-nav-pills.html.twig */
class __TwigTemplate_aef90709ad52d8ead0fff9c83c337333 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/includes/settings-nav-pills.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/includes/settings-nav-pills.html.twig"));

        // line 2
        echo "<div class=\"card-header p-0 border-bottom-0\">
    <ul class=\"nav nav-tabs\" role=\"tablist\">
        <li class=\"nav-item\">
            <a href=\"";
        // line 5
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("admin_settings_security");
        echo "\" class=\"nav-link";
        echo twig_escape_filter($this->env, $this->env->getRuntime('App\Twig\Runtime\WebsiteExtensionRuntime')->displayClass(" active", "settings", "security"), "html", null, true);
        echo "\" role=\"tab\">
                <i class=\"fas fa-shield-alt\"></i> ";
        // line 6
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.settings.security"), "html", null, true);
        echo "
            </a>
        </li>

        <li class=\"nav-item\">
            <a href=\"";
        // line 11
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("admin_settings_profile");
        echo "\" class=\"nav-link";
        echo twig_escape_filter($this->env, $this->env->getRuntime('App\Twig\Runtime\WebsiteExtensionRuntime')->displayClass(" active", "settings", "profile"), "html", null, true);
        echo "\" role=\"tab\">
                <i class=\"fas fa-user-circle\"></i> ";
        // line 12
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.settings.profile"), "html", null, true);
        echo "
            </a>
        </li>

        <li class=\"nav-item\">
            <a href=\"";
        // line 17
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("admin_settings_address");
        echo "\" class=\"nav-link";
        echo twig_escape_filter($this->env, $this->env->getRuntime('App\Twig\Runtime\WebsiteExtensionRuntime')->displayClass(" active", "settings", "address"), "html", null, true);
        echo "\" role=\"tab\">
                <i class=\"fas fa-map-marker-alt\"></i> ";
        // line 18
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.settings.address"), "html", null, true);
        echo "
            </a>
        </li>
    </ul>
</div>";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "admin/includes/settings-nav-pills.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  82 => 18,  76 => 17,  68 => 12,  62 => 11,  54 => 6,  48 => 5,  43 => 2,);
    }

    public function getSourceContext()
    {
        return new Source("{# TODO: Improve responsive. #}
<div class=\"card-header p-0 border-bottom-0\">
    <ul class=\"nav nav-tabs\" role=\"tablist\">
        <li class=\"nav-item\">
            <a href=\"{{ path('admin_settings_security') }}\" class=\"nav-link{{ display_class(' active', 'settings', 'security') }}\" role=\"tab\">
                <i class=\"fas fa-shield-alt\"></i> {{ 'app.settings.security'|trans }}
            </a>
        </li>

        <li class=\"nav-item\">
            <a href=\"{{ path('admin_settings_profile') }}\" class=\"nav-link{{ display_class(' active', 'settings', 'profile') }}\" role=\"tab\">
                <i class=\"fas fa-user-circle\"></i> {{ 'app.settings.profile'|trans }}
            </a>
        </li>

        <li class=\"nav-item\">
            <a href=\"{{ path('admin_settings_address') }}\" class=\"nav-link{{ display_class(' active', 'settings', 'address') }}\" role=\"tab\">
                <i class=\"fas fa-map-marker-alt\"></i> {{ 'app.settings.address'|trans }}
            </a>
        </li>
    </ul>
</div>", "admin/includes/settings-nav-pills.html.twig", "/Users/thomaskaenzig/projects/language-exchange/admin/templates/admin/includes/settings-nav-pills.html.twig");
    }
}
