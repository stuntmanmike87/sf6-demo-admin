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

/* admin/includes/navbar.html.twig */
class __TwigTemplate_da40db43cd6d2396cb3d6806ab821465 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/includes/navbar.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/includes/navbar.html.twig"));

        // line 1
        echo "<nav class=\"main-header js-main-header navbar navbar-expand navbar-white navbar-light\">
    <ul class=\"navbar-nav\">
        <li class=\"nav-item\">
            <a class=\"nav-link\" data-widget=\"pushmenu\" href=\"#\" role=\"button\">
                <i class=\"fas fa-bars\"></i>
            </a>
        </li>

        ";
        // line 9
        if ( !twig_test_empty((isset($context["headerNavbar"]) || array_key_exists("headerNavbar", $context) ? $context["headerNavbar"] : (function () { throw new RuntimeError('Variable "headerNavbar" does not exist.', 9, $this->source); })()))) {
            // line 10
            echo "            ";
            echo (isset($context["headerNavbar"]) || array_key_exists("headerNavbar", $context) ? $context["headerNavbar"] : (function () { throw new RuntimeError('Variable "headerNavbar" does not exist.', 10, $this->source); })());
            echo "
        ";
        }
        // line 12
        echo "    </ul>

    <ul class=\"navbar-nav ml-auto\">
        ";
        // line 15
        $this->loadTemplate("admin/includes/navbar-languages-menu.twig", "admin/includes/navbar.html.twig", 15)->display($context);
        // line 16
        echo "        ";
        $this->loadTemplate("admin/includes/navbar-user-menu.twig", "admin/includes/navbar.html.twig", 16)->display($context);
        // line 17
        echo "    </ul>
</nav>
";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "admin/includes/navbar.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  71 => 17,  68 => 16,  66 => 15,  61 => 12,  55 => 10,  53 => 9,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<nav class=\"main-header js-main-header navbar navbar-expand navbar-white navbar-light\">
    <ul class=\"navbar-nav\">
        <li class=\"nav-item\">
            <a class=\"nav-link\" data-widget=\"pushmenu\" href=\"#\" role=\"button\">
                <i class=\"fas fa-bars\"></i>
            </a>
        </li>

        {% if headerNavbar is not empty %}
            {{ headerNavbar|raw }}
        {% endif %}
    </ul>

    <ul class=\"navbar-nav ml-auto\">
        {% include 'admin/includes/navbar-languages-menu.twig' %}
        {% include 'admin/includes/navbar-user-menu.twig' %}
    </ul>
</nav>
", "admin/includes/navbar.html.twig", "/Users/thomaskaenzig/projects/language-exchange/admin/templates/admin/includes/navbar.html.twig");
    }
}
