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

/* admin/includes/main-sidebar.html.twig */
class __TwigTemplate_9a8016a566c66485dd64feafb7e9f1d5 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/includes/main-sidebar.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/includes/main-sidebar.html.twig"));

        // line 1
        echo "<aside class=\"main-sidebar sidebar-dark-primary elevation-4\">
    <a href=\"#\" class=\"brand-link\" target=\"_blank\">
        <img src=\"";
        // line 3
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl($this->extensions['Liip\ImagineBundle\Templating\FilterExtension']->filter("img/random-logo.png", "90x90")), "html", null, true);
        echo "\"
             alt=\"Logo\" class=\"brand-image\"
             style=\"opacity: .8\">
        <span class=\"brand-text font-weight-light\">";
        // line 6
        echo twig_escape_filter($this->env, (isset($context["app_name"]) || array_key_exists("app_name", $context) ? $context["app_name"] : (function () { throw new RuntimeError('Variable "app_name" does not exist.', 6, $this->source); })()), "html", null, true);
        echo "</span>
    </a>

    <div class=\"sidebar\">
        <nav class=\"mt-2\">
            <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\">
                ";
        // line 12
        if ($this->env->getRuntime('App\Twig\Runtime\AclExtensionRuntime')->isAccessible("admin", "user")) {
            // line 13
            echo "                    <li class=\"nav-item";
            echo twig_escape_filter($this->env, $this->env->getRuntime('App\Twig\Runtime\WebsiteExtensionRuntime')->displayClass(" menu-open", "user"), "html", null, true);
            echo "\">
                        <a href=\"#\" class=\"nav-link";
            // line 14
            echo twig_escape_filter($this->env, $this->env->getRuntime('App\Twig\Runtime\WebsiteExtensionRuntime')->displayClass(" active", "user"), "html", null, true);
            echo "\">
                            <i class=\"nav-icon fas fa-users\"></i>
                            <p>
                                ";
            // line 17
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.users"), "html", null, true);
            echo "
                                <i class=\"right fas fa-angle-left\"></i>
                            </p>
                        </a>
                        <ul class=\"nav nav-treeview\">
                            ";
            // line 22
            if ($this->env->getRuntime('App\Twig\Runtime\AclExtensionRuntime')->isAccessible("admin", "user", "add")) {
                // line 23
                echo "                                <li class=\"nav-item\">
                                    <a href=\"";
                // line 24
                echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("admin_user_add");
                echo "\" class=\"nav-link";
                echo twig_escape_filter($this->env, $this->env->getRuntime('App\Twig\Runtime\WebsiteExtensionRuntime')->displayClass(" active", "user", "add"), "html", null, true);
                echo "\">
                                        <i class=\"fas fa-plus nav-icon\"></i>
                                        <p>";
                // line 26
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.add"), "html", null, true);
                echo "</p>
                                    </a>
                                </li>
                            ";
            }
            // line 30
            echo "
                            ";
            // line 31
            if ($this->env->getRuntime('App\Twig\Runtime\AclExtensionRuntime')->isAccessible("admin", "user", "index")) {
                // line 32
                echo "                                <li class=\"nav-item\">
                                    <a href=\"";
                // line 33
                echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("admin_user_index");
                echo "\" class=\"nav-link";
                echo twig_escape_filter($this->env, $this->env->getRuntime('App\Twig\Runtime\WebsiteExtensionRuntime')->displayClass(" active", "user", "index"), "html", null, true);
                echo "\">
                                        <i class=\"fas fa-list-ul nav-icon\"></i>
                                        <p>";
                // line 35
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.list_all"), "html", null, true);
                echo "</p>
                                    </a>
                                </li>
                            ";
            }
            // line 39
            echo "                        </ul>
                    </li>
                ";
        }
        // line 42
        echo "
                ";
        // line 43
        if ($this->env->getRuntime('App\Twig\Runtime\AclExtensionRuntime')->isAccessible("admin", "settings")) {
            // line 44
            echo "                    <li class=\"nav-item";
            echo twig_escape_filter($this->env, $this->env->getRuntime('App\Twig\Runtime\WebsiteExtensionRuntime')->displayClass(" menu-open", "settings"), "html", null, true);
            echo "\">
                        <a href=\"#\" class=\"nav-link";
            // line 45
            echo twig_escape_filter($this->env, $this->env->getRuntime('App\Twig\Runtime\WebsiteExtensionRuntime')->displayClass(" active", "settings"), "html", null, true);
            echo "\">
                            <i class=\"nav-icon fas fa-sliders-h\"></i>
                            <p>
                                ";
            // line 48
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.settings"), "html", null, true);
            echo "
                                <i class=\"right fas fa-angle-left\"></i>
                            </p>
                        </a>
                        <ul class=\"nav nav-treeview\">
                            ";
            // line 53
            if ($this->env->getRuntime('App\Twig\Runtime\AclExtensionRuntime')->isAccessible("admin", "settings", "security")) {
                // line 54
                echo "                                <li class=\"nav-item\">
                                    <a href=\"";
                // line 55
                echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("admin_settings_security");
                echo "\" class=\"nav-link";
                echo twig_escape_filter($this->env, $this->env->getRuntime('App\Twig\Runtime\WebsiteExtensionRuntime')->displayClass(" active", "settings", "security"), "html", null, true);
                echo "\">
                                        <i class=\"fas fa-shield-alt nav-icon\"></i>
                                        <p>";
                // line 57
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.settings.security"), "html", null, true);
                echo "</p>
                                    </a>
                                </li>
                            ";
            }
            // line 61
            echo "
                            ";
            // line 62
            if ($this->env->getRuntime('App\Twig\Runtime\AclExtensionRuntime')->isAccessible("admin", "settings", "profile")) {
                // line 63
                echo "                                <li class=\"nav-item\">
                                    <a href=\"";
                // line 64
                echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("admin_settings_profile");
                echo "\" class=\"nav-link";
                echo twig_escape_filter($this->env, $this->env->getRuntime('App\Twig\Runtime\WebsiteExtensionRuntime')->displayClass(" active", "settings", "profile"), "html", null, true);
                echo "\">
                                        <i class=\"fas fa-user-circle nav-icon\"></i>
                                        <p>";
                // line 66
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.settings.profile"), "html", null, true);
                echo "</p>
                                    </a>
                                </li>
                            ";
            }
            // line 70
            echo "
                            ";
            // line 71
            if ($this->env->getRuntime('App\Twig\Runtime\AclExtensionRuntime')->isAccessible("admin", "settings", "address")) {
                // line 72
                echo "                                <li class=\"nav-item\">
                                    <a href=\"";
                // line 73
                echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("admin_settings_address");
                echo "\" class=\"nav-link";
                echo twig_escape_filter($this->env, $this->env->getRuntime('App\Twig\Runtime\WebsiteExtensionRuntime')->displayClass(" active", "settings", "address"), "html", null, true);
                echo "\">
                                        <i class=\"fas fa-map-marker-alt nav-icon\"></i>
                                        <p>";
                // line 75
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.settings.address"), "html", null, true);
                echo "</p>
                                    </a>
                                </li>
                            ";
            }
            // line 79
            echo "                        </ul>
                    </li>
                ";
        }
        // line 82
        echo "            </ul>
        </nav>
    </div>
</aside>
";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "admin/includes/main-sidebar.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  221 => 82,  216 => 79,  209 => 75,  202 => 73,  199 => 72,  197 => 71,  194 => 70,  187 => 66,  180 => 64,  177 => 63,  175 => 62,  172 => 61,  165 => 57,  158 => 55,  155 => 54,  153 => 53,  145 => 48,  139 => 45,  134 => 44,  132 => 43,  129 => 42,  124 => 39,  117 => 35,  110 => 33,  107 => 32,  105 => 31,  102 => 30,  95 => 26,  88 => 24,  85 => 23,  83 => 22,  75 => 17,  69 => 14,  64 => 13,  62 => 12,  53 => 6,  47 => 3,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<aside class=\"main-sidebar sidebar-dark-primary elevation-4\">
    <a href=\"#\" class=\"brand-link\" target=\"_blank\">
        <img src=\"{{ asset('img/random-logo.png'|imagine_filter('90x90')) }}\"
             alt=\"Logo\" class=\"brand-image\"
             style=\"opacity: .8\">
        <span class=\"brand-text font-weight-light\">{{ app_name }}</span>
    </a>

    <div class=\"sidebar\">
        <nav class=\"mt-2\">
            <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\">
                {% if acl_is_accessible('admin', 'user') %}
                    <li class=\"nav-item{{ display_class(' menu-open', 'user') }}\">
                        <a href=\"#\" class=\"nav-link{{ display_class(' active', 'user') }}\">
                            <i class=\"nav-icon fas fa-users\"></i>
                            <p>
                                {{ 'app.users'|trans }}
                                <i class=\"right fas fa-angle-left\"></i>
                            </p>
                        </a>
                        <ul class=\"nav nav-treeview\">
                            {% if acl_is_accessible('admin', 'user', 'add') %}
                                <li class=\"nav-item\">
                                    <a href=\"{{ path('admin_user_add') }}\" class=\"nav-link{{ display_class(' active', 'user', 'add') }}\">
                                        <i class=\"fas fa-plus nav-icon\"></i>
                                        <p>{{ 'app.add'|trans }}</p>
                                    </a>
                                </li>
                            {% endif %}

                            {% if acl_is_accessible('admin', 'user', 'index') %}
                                <li class=\"nav-item\">
                                    <a href=\"{{ path('admin_user_index') }}\" class=\"nav-link{{ display_class(' active', 'user', 'index') }}\">
                                        <i class=\"fas fa-list-ul nav-icon\"></i>
                                        <p>{{ 'app.list_all'|trans }}</p>
                                    </a>
                                </li>
                            {% endif %}
                        </ul>
                    </li>
                {% endif %}

                {% if acl_is_accessible('admin', 'settings') %}
                    <li class=\"nav-item{{ display_class(' menu-open', 'settings') }}\">
                        <a href=\"#\" class=\"nav-link{{ display_class(' active', 'settings') }}\">
                            <i class=\"nav-icon fas fa-sliders-h\"></i>
                            <p>
                                {{ 'app.settings'|trans }}
                                <i class=\"right fas fa-angle-left\"></i>
                            </p>
                        </a>
                        <ul class=\"nav nav-treeview\">
                            {% if acl_is_accessible('admin', 'settings', 'security') %}
                                <li class=\"nav-item\">
                                    <a href=\"{{ path('admin_settings_security') }}\" class=\"nav-link{{ display_class(' active', 'settings', 'security') }}\">
                                        <i class=\"fas fa-shield-alt nav-icon\"></i>
                                        <p>{{ 'app.settings.security'|trans }}</p>
                                    </a>
                                </li>
                            {% endif %}

                            {% if acl_is_accessible('admin', 'settings', 'profile') %}
                                <li class=\"nav-item\">
                                    <a href=\"{{ path('admin_settings_profile') }}\" class=\"nav-link{{ display_class(' active', 'settings', 'profile') }}\">
                                        <i class=\"fas fa-user-circle nav-icon\"></i>
                                        <p>{{ 'app.settings.profile'|trans }}</p>
                                    </a>
                                </li>
                            {% endif %}

                            {% if acl_is_accessible('admin', 'settings', 'address') %}
                                <li class=\"nav-item\">
                                    <a href=\"{{ path('admin_settings_address') }}\" class=\"nav-link{{ display_class(' active', 'settings', 'address') }}\">
                                        <i class=\"fas fa-map-marker-alt nav-icon\"></i>
                                        <p>{{ 'app.settings.address'|trans }}</p>
                                    </a>
                                </li>
                            {% endif %}
                        </ul>
                    </li>
                {% endif %}
            </ul>
        </nav>
    </div>
</aside>
", "admin/includes/main-sidebar.html.twig", "/Users/thomaskaenzig/projects/language-exchange/admin/templates/admin/includes/main-sidebar.html.twig");
    }
}
