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

/* admin/includes/navbar-user-menu.twig */
class __TwigTemplate_e714e0b281ee78bcda26990b0072caac extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/includes/navbar-user-menu.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/includes/navbar-user-menu.twig"));

        // line 1
        echo "<li class=\"nav-item dropdown user-menu navbar-user-item\">
    <a href=\"#\" class=\"nav-link dropdown-toggle navbar-user-item__dropdown-toggle\" data-toggle=\"dropdown\">
        <img src=\"";
        // line 3
        echo twig_escape_filter($this->env, $this->env->getRuntime('App\Twig\Runtime\WebsiteExtensionRuntime')->getImage(((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["app"] ?? null), "user", [], "any", false, true, false, 3), "urlPicture", [], "any", true, true, false, 3)) ? (_twig_default_filter(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["app"] ?? null), "user", [], "any", false, true, false, 3), "urlPicture", [], "any", false, false, false, 3), "img/placeholders/profile-avatar.png")) : ("img/placeholders/profile-avatar.png")), ["w" => 200, "h" => 200]), "html", null, true);
        echo "\" class=\"user-image img-circle img-bordered-sm\" alt=\"User Image\">
        <span class=\"d-none d-md-inline\">
            ";
        // line 5
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 5, $this->source); })()), "user", [], "any", false, false, false, 5), "firstName", [], "any", false, false, false, 5), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 5, $this->source); })()), "user", [], "any", false, false, false, 5), "lastName", [], "any", false, false, false, 5), "html", null, true);
        echo "
        </span>
    </a>
    <ul class=\"dropdown-menu dropdown-menu-lg dropdown-menu-right\">
        <li class=\"user-header bg-primary\">
            <img src=\"";
        // line 10
        echo twig_escape_filter($this->env, $this->env->getRuntime('App\Twig\Runtime\WebsiteExtensionRuntime')->getImage(((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["app"] ?? null), "user", [], "any", false, true, false, 10), "urlPicture", [], "any", true, true, false, 10)) ? (_twig_default_filter(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["app"] ?? null), "user", [], "any", false, true, false, 10), "urlPicture", [], "any", false, false, false, 10), "img/placeholders/profile-avatar.png")) : ("img/placeholders/profile-avatar.png")), ["w" => 200, "h" => 200]), "html", null, true);
        echo "\" class=\"img-circle elevation-2\" alt=\"User Image\">

            <p>
                ";
        // line 13
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 13, $this->source); })()), "user", [], "any", false, false, false, 13), "firstName", [], "any", false, false, false, 13), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 13, $this->source); })()), "user", [], "any", false, false, false, 13), "lastName", [], "any", false, false, false, 13), "html", null, true);
        echo "
            </p>
        </li>

        <li class=\"user-footer\">
            <a href=\"";
        // line 18
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("admin_settings_security");
        echo "\"
               class=\"btn btn-default\">
                <i class=\"fas fa-sliders-h\"></i> ";
        // line 20
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.settings"), "html", null, true);
        echo "
            </a>

            <a href=\"";
        // line 23
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("security_logout");
        echo "\"
               class=\"btn btn-default float-right\">
                <i class=\"fas fa-sign-out-alt\"></i> ";
        // line 25
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.logout"), "html", null, true);
        echo "
            </a>
        </li>
    </ul>
</li>";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "admin/includes/navbar-user-menu.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  94 => 25,  89 => 23,  83 => 20,  78 => 18,  68 => 13,  62 => 10,  52 => 5,  47 => 3,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<li class=\"nav-item dropdown user-menu navbar-user-item\">
    <a href=\"#\" class=\"nav-link dropdown-toggle navbar-user-item__dropdown-toggle\" data-toggle=\"dropdown\">
        <img src=\"{{ app_image(app.user.urlPicture|default('img/placeholders/profile-avatar.png'), {'w': 200, 'h': 200}) }}\" class=\"user-image img-circle img-bordered-sm\" alt=\"User Image\">
        <span class=\"d-none d-md-inline\">
            {{ app.user.firstName }} {{ app.user.lastName }}
        </span>
    </a>
    <ul class=\"dropdown-menu dropdown-menu-lg dropdown-menu-right\">
        <li class=\"user-header bg-primary\">
            <img src=\"{{ app_image(app.user.urlPicture|default('img/placeholders/profile-avatar.png'), {'w': 200, 'h': 200}) }}\" class=\"img-circle elevation-2\" alt=\"User Image\">

            <p>
                {{ app.user.firstName }} {{ app.user.lastName }}
            </p>
        </li>

        <li class=\"user-footer\">
            <a href=\"{{ path('admin_settings_security') }}\"
               class=\"btn btn-default\">
                <i class=\"fas fa-sliders-h\"></i> {{ 'app.settings'|trans }}
            </a>

            <a href=\"{{ path('security_logout') }}\"
               class=\"btn btn-default float-right\">
                <i class=\"fas fa-sign-out-alt\"></i> {{ 'app.logout'|trans }}
            </a>
        </li>
    </ul>
</li>", "admin/includes/navbar-user-menu.twig", "/Users/thomaskaenzig/projects/language-exchange/admin/templates/admin/includes/navbar-user-menu.twig");
    }
}
