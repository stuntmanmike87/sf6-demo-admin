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

/* admin/user/index.html.twig */
class __TwigTemplate_4514e0bd433cecf95cdc1b6be649e12b extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'body' => [$this, 'block_body'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "admin.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/user/index.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/user/index.html.twig"));

        $this->parent = $this->loadTemplate("admin.html.twig", "admin/user/index.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 3
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        echo " ";
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.users"), "html", null, true);
        echo " ";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 5
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 6
        echo "    <section class=\"content-header\">
        <div class=\"container-fluid\">
            <div class=\"row mb-2\">
                <div class=\"col-sm-6\">
                    <h1>";
        // line 10
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.users"), "html", null, true);
        echo "</h1>
                </div>

                <div class=\"col-sm-6\">
                    <ol class=\"breadcrumb float-sm-right\">
                        <li class=\"breadcrumb-item active\">
                            ";
        // line 16
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.users"), "html", null, true);
        echo "
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </section>

    <section class=\"content\">
        <div class=\"container-fluid\">
            <div class=\"mb-3 d-flex justify-content-end\">
                <form action=\"";
        // line 27
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("admin_user_index");
        echo "\"
                      method=\"get\"
                      class=\"input-group search-list__input-group\">
                    <div class=\"input-group-prepend\">
                        <a class=\"btn btn-secondary\" type=\"button\" href=\"";
        // line 31
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("admin_user_index");
        echo "\">
                            <i class=\"fas fa-eraser\"></i>
                            <span class=\"d-none d-sm-inline-block\">";
        // line 33
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.clean"), "html", null, true);
        echo "</span>
                        </a>
                    </div>
                    <input type=\"text\"
                           name=\"q\"
                           class=\"form-control\"
                           placeholder=\"";
        // line 39
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.search_input.by_names"), "html", null, true);
        echo "\"
                           aria-label=\"";
        // line 40
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.search_input.by_names"), "html", null, true);
        echo "\"
                           autocomplete=\"off\"
                           value=\"";
        // line 42
        echo twig_escape_filter($this->env, (isset($context["query"]) || array_key_exists("query", $context) ? $context["query"] : (function () { throw new RuntimeError('Variable "query" does not exist.', 42, $this->source); })()), "html", null, true);
        echo "\">

                    <div class=\"input-group-append\">
                        <button type=\"submit\" class=\"btn btn-secondary\">
                            <i class=\"fas fa-search\"></i>
                            <span class=\"d-none d-sm-inline-block\">";
        // line 47
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.search"), "html", null, true);
        echo "</span>
                        </button>
                    </div>
                </form>

                ";
        // line 52
        if ($this->env->getRuntime('App\Twig\Runtime\AclExtensionRuntime')->isAccessible("admin", "user", "add")) {
            // line 53
            echo "                    <a class=\"btn btn-primary ml-3 text-nowrap\" href=\"";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("admin_user_add");
            echo "\">
                        <i class=\"fas fa-plus\"></i> ";
            // line 54
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.user.add_user"), "html", null, true);
            echo "
                    </a>
                ";
        }
        // line 57
        echo "            </div>

            ";
        // line 59
        if (twig_length_filter($this->env, (isset($context["users"]) || array_key_exists("users", $context) ? $context["users"] : (function () { throw new RuntimeError('Variable "users" does not exist.', 59, $this->source); })()))) {
            // line 60
            echo "                <div class=\"card\">
                    <div class=\"card-header\">
                        <h3 class=\"card-title\">
                            ";
            // line 63
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.user.user_list"), "html", null, true);
            echo "
                        </h3>

                        <div class=\"card-tools\">
                            ";
            // line 67
            echo $this->extensions['Knp\Bundle\PaginatorBundle\Twig\Extension\PaginationExtension']->render($this->env, (isset($context["users"]) || array_key_exists("users", $context) ? $context["users"] : (function () { throw new RuntimeError('Variable "users" does not exist.', 67, $this->source); })()), null, [], ["size" => "small"]);
            echo "
                        </div>
                    </div>

                    <div class=\"card-body p-0 table-responsive-xl\">
                        <table class=\"table table-striped projects\">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>";
            // line 76
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.type"), "html", null, true);
            echo "</th>
                                    <th>";
            // line 77
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.group"), "html", null, true);
            echo "</th>
                                    <th>";
            // line 78
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.active"), "html", null, true);
            echo "</th>
                                    <th>";
            // line 79
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.verified"), "html", null, true);
            echo "</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                            ";
            // line 85
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["users"]) || array_key_exists("users", $context) ? $context["users"] : (function () { throw new RuntimeError('Variable "users" does not exist.', 85, $this->source); })()));
            foreach ($context['_seq'] as $context["_key"] => $context["user"]) {
                // line 86
                echo "                                <tr>
                                    <td class=\"text-nowrap\">
                                        <div class=\"d-flex\">
                                            <img class=\"users__item-picture img-circle img-bordered-sm mr-3\"
                                                 src=\"";
                // line 90
                echo twig_escape_filter($this->env, $this->env->getRuntime('App\Twig\Runtime\WebsiteExtensionRuntime')->getImage(((twig_get_attribute($this->env, $this->source, $context["user"], "urlPicture", [], "any", true, true, false, 90)) ? (_twig_default_filter(twig_get_attribute($this->env, $this->source, $context["user"], "urlPicture", [], "any", false, false, false, 90))) : ("")), ["w" => 200, "h" => 200]), "html", null, true);
                echo "\"
                                                 onerror=\"this.onerror=null;this.src='";
                // line 91
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_constant("App\\Enum\\Placeholder\\PlaceholderEnum::PROFILE_AVATAR"), "value", [], "any", false, false, false, 91), "html", null, true);
                echo "';\"
                                                 alt=\"\">
                                            <div>
                                                <span class=\"text-bold\"> ";
                // line 94
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["user"], "firstName", [], "any", false, false, false, 94), "html", null, true);
                echo " ";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["user"], "lastName", [], "any", false, false, false, 94), "html", null, true);
                echo " </span>
                                                <small class=\"description d-block\"> ";
                // line 95
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.created_at"), "html", null, true);
                echo " ";
                echo twig_escape_filter($this->env, twig_date_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["user"], "createdAt", [], "any", false, false, false, 95), "d.m.Y"), "html", null, true);
                echo " </small>

                                                <div class=\"mt-2 d-block d-sm-none\">
                                                    ";
                // line 98
                if ($this->env->getRuntime('App\Twig\Runtime\AclExtensionRuntime')->isAccessible("admin", "user", "edit")) {
                    // line 99
                    echo "                                                        <a href=\"";
                    echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("admin_user_edit", ["id" => twig_get_attribute($this->env, $this->source, $context["user"], "id", [], "any", false, false, false, 99)]), "html", null, true);
                    echo "\"
                                                           title=\"";
                    // line 100
                    echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.edit"), "html", null, true);
                    echo "\">
                                                            <i class=\"fas fa-pencil-alt\"></i> ";
                    // line 101
                    echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.edit"), "html", null, true);
                    echo "
                                                        </a>
                                                    ";
                }
                // line 104
                echo "                                                    &nbsp
                                                    ";
                // line 105
                if ($this->env->getRuntime('App\Twig\Runtime\AclExtensionRuntime')->isAccessible("admin", "user", "delete")) {
                    // line 106
                    echo "                                                        <a href=\"#\"
                                                           title=\"";
                    // line 107
                    echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.delete"), "html", null, true);
                    echo "\"
                                                           onclick=\"return confirm('";
                    // line 108
                    echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.user.delete_confirmation_dialog"), "html", null, true);
                    echo "')\">
                                                            <i class=\"fas fa-trash\" aria-hidden=\"true\"></i> ";
                    // line 109
                    echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.delete"), "html", null, true);
                    echo "
                                                        </a>
                                                    ";
                }
                // line 112
                echo "                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td class=\"text-nowrap\">
                                        ";
                // line 118
                echo twig_escape_filter($this->env, $this->env->getRuntime('App\Twig\Runtime\WebsiteExtensionRuntime')->getTextByTranslateKey((isset($context["transTypes"]) || array_key_exists("transTypes", $context) ? $context["transTypes"] : (function () { throw new RuntimeError('Variable "transTypes" does not exist.', 118, $this->source); })()), twig_get_attribute($this->env, $this->source, $context["user"], "userTypeTranslateKey", [], "any", false, false, false, 118)), "html", null, true);
                echo "
                                    </td>

                                    <td class=\"text-nowrap\">
                                        ";
                // line 122
                echo twig_escape_filter($this->env, $this->env->getRuntime('App\Twig\Runtime\WebsiteExtensionRuntime')->getTextByTranslateKey((isset($context["transGroups"]) || array_key_exists("transGroups", $context) ? $context["transGroups"] : (function () { throw new RuntimeError('Variable "transGroups" does not exist.', 122, $this->source); })()), twig_get_attribute($this->env, $this->source, $context["user"], "userGroupTranslateKey", [], "any", false, false, false, 122)), "html", null, true);
                echo "
                                    </td>

                                    <td>
                                        ";
                // line 126
                echo $this->env->getRuntime('App\Twig\Runtime\WebsiteExtensionRuntime')->getHtmlToggle(twig_get_attribute($this->env, $this->source, $context["user"], "active", [], "any", false, false, false, 126));
                echo "
                                    </td>

                                    <td>
                                        ";
                // line 130
                echo $this->env->getRuntime('App\Twig\Runtime\WebsiteExtensionRuntime')->getHtmlToggle(twig_get_attribute($this->env, $this->source, $context["user"], "verified", [], "any", false, false, false, 130));
                echo "
                                    </td>

                                    <td class=\"text-right text-nowrap\">
                                        <div class=\"d-none d-sm-block\">
                                            ";
                // line 135
                if ($this->env->getRuntime('App\Twig\Runtime\AclExtensionRuntime')->isAccessible("admin", "user", "edit")) {
                    // line 136
                    echo "                                                <a class=\"btn btn-sm btn-info\"
                                                   href=\"";
                    // line 137
                    echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("admin_user_edit", ["id" => twig_get_attribute($this->env, $this->source, $context["user"], "id", [], "any", false, false, false, 137)]), "html", null, true);
                    echo "\">
                                                    <i class=\"fas fa-pencil-alt\">
                                                    </i>
                                                    ";
                    // line 140
                    echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.edit"), "html", null, true);
                    echo "
                                                </a>
                                            ";
                }
                // line 143
                echo "
                                            ";
                // line 144
                if ($this->env->getRuntime('App\Twig\Runtime\AclExtensionRuntime')->isAccessible("admin", "user", "delete")) {
                    // line 145
                    echo "                                                <a class=\"btn btn-sm btn-danger\"
                                                   href=\"#\"
                                                   onclick=\"return confirm('";
                    // line 147
                    echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.user.delete_confirmation_dialog"), "html", null, true);
                    echo "')\">
                                                    <i class=\"fas fa-trash\"></i>
                                                    ";
                    // line 149
                    echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.delete"), "html", null, true);
                    echo "
                                                </a>
                                            ";
                }
                // line 152
                echo "                                        </div>
                                    </td>
                                </tr>
                            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['user'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 156
            echo "                            </tbody>
                        </table>
                    </div>

                    <div class=\"card-footer clearfix bg-white py-0\">
                        ";
            // line 161
            echo $this->extensions['Knp\Bundle\PaginatorBundle\Twig\Extension\PaginationExtension']->render($this->env, (isset($context["users"]) || array_key_exists("users", $context) ? $context["users"] : (function () { throw new RuntimeError('Variable "users" does not exist.', 161, $this->source); })()), null, [], ["align" => "right"]);
            echo "
                    </div>
                </div>
            ";
        } else {
            // line 165
            echo "                <div class=\"content-empty-results\">
                    <p>";
            // line 166
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.list.not_exist_results"), "html", null, true);
            echo "</p>
                </div>
            ";
        }
        // line 169
        echo "        </div>
    </section>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    public function getTemplateName()
    {
        return "admin/user/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  408 => 169,  402 => 166,  399 => 165,  392 => 161,  385 => 156,  376 => 152,  370 => 149,  365 => 147,  361 => 145,  359 => 144,  356 => 143,  350 => 140,  344 => 137,  341 => 136,  339 => 135,  331 => 130,  324 => 126,  317 => 122,  310 => 118,  302 => 112,  296 => 109,  292 => 108,  288 => 107,  285 => 106,  283 => 105,  280 => 104,  274 => 101,  270 => 100,  265 => 99,  263 => 98,  255 => 95,  249 => 94,  243 => 91,  239 => 90,  233 => 86,  229 => 85,  220 => 79,  216 => 78,  212 => 77,  208 => 76,  196 => 67,  189 => 63,  184 => 60,  182 => 59,  178 => 57,  172 => 54,  167 => 53,  165 => 52,  157 => 47,  149 => 42,  144 => 40,  140 => 39,  131 => 33,  126 => 31,  119 => 27,  105 => 16,  96 => 10,  90 => 6,  80 => 5,  59 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'admin.html.twig' %}

{% block title %} {{ 'app.users'|trans }} {% endblock %}

{% block body %}
    <section class=\"content-header\">
        <div class=\"container-fluid\">
            <div class=\"row mb-2\">
                <div class=\"col-sm-6\">
                    <h1>{{ 'app.users'|trans }}</h1>
                </div>

                <div class=\"col-sm-6\">
                    <ol class=\"breadcrumb float-sm-right\">
                        <li class=\"breadcrumb-item active\">
                            {{ 'app.users'|trans }}
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </section>

    <section class=\"content\">
        <div class=\"container-fluid\">
            <div class=\"mb-3 d-flex justify-content-end\">
                <form action=\"{{ path('admin_user_index') }}\"
                      method=\"get\"
                      class=\"input-group search-list__input-group\">
                    <div class=\"input-group-prepend\">
                        <a class=\"btn btn-secondary\" type=\"button\" href=\"{{ path('admin_user_index') }}\">
                            <i class=\"fas fa-eraser\"></i>
                            <span class=\"d-none d-sm-inline-block\">{{ 'app.clean'|trans }}</span>
                        </a>
                    </div>
                    <input type=\"text\"
                           name=\"q\"
                           class=\"form-control\"
                           placeholder=\"{{ 'app.search_input.by_names'|trans }}\"
                           aria-label=\"{{ 'app.search_input.by_names'|trans }}\"
                           autocomplete=\"off\"
                           value=\"{{ query }}\">

                    <div class=\"input-group-append\">
                        <button type=\"submit\" class=\"btn btn-secondary\">
                            <i class=\"fas fa-search\"></i>
                            <span class=\"d-none d-sm-inline-block\">{{ 'app.search'|trans }}</span>
                        </button>
                    </div>
                </form>

                {% if acl_is_accessible('admin', 'user', 'add') %}
                    <a class=\"btn btn-primary ml-3 text-nowrap\" href=\"{{ path('admin_user_add') }}\">
                        <i class=\"fas fa-plus\"></i> {{ 'app.user.add_user'|trans }}
                    </a>
                {% endif %}
            </div>

            {% if users|length %}
                <div class=\"card\">
                    <div class=\"card-header\">
                        <h3 class=\"card-title\">
                            {{ 'app.user.user_list'|trans }}
                        </h3>

                        <div class=\"card-tools\">
                            {{ knp_pagination_render(users, null, {}, {size: 'small'}) }}
                        </div>
                    </div>

                    <div class=\"card-body p-0 table-responsive-xl\">
                        <table class=\"table table-striped projects\">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>{{ 'app.type'|trans }}</th>
                                    <th>{{ 'app.group'|trans }}</th>
                                    <th>{{ 'app.active'|trans }}</th>
                                    <th>{{ 'app.verified'|trans }}</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                            {% for user in users %}
                                <tr>
                                    <td class=\"text-nowrap\">
                                        <div class=\"d-flex\">
                                            <img class=\"users__item-picture img-circle img-bordered-sm mr-3\"
                                                 src=\"{{ app_image(user.urlPicture|default(), {'w': 200, 'h': 200}) }}\"
                                                 onerror=\"this.onerror=null;this.src='{{ constant('App\\\\Enum\\\\Placeholder\\\\PlaceholderEnum::PROFILE_AVATAR').value }}';\"
                                                 alt=\"\">
                                            <div>
                                                <span class=\"text-bold\"> {{ user.firstName }} {{ user.lastName }} </span>
                                                <small class=\"description d-block\"> {{ 'app.created_at'|trans }} {{ user.createdAt|date(\"d.m.Y\") }} </small>

                                                <div class=\"mt-2 d-block d-sm-none\">
                                                    {% if acl_is_accessible('admin', 'user', 'edit') %}
                                                        <a href=\"{{ path('admin_user_edit', { id: user.id }) }}\"
                                                           title=\"{{ 'app.edit'|trans }}\">
                                                            <i class=\"fas fa-pencil-alt\"></i> {{ 'app.edit'|trans }}
                                                        </a>
                                                    {% endif %}
                                                    &nbsp
                                                    {% if acl_is_accessible('admin', 'user', 'delete') %}
                                                        <a href=\"#\"
                                                           title=\"{{ 'app.delete'|trans }}\"
                                                           onclick=\"return confirm('{{ 'app.user.delete_confirmation_dialog'|trans }}')\">
                                                            <i class=\"fas fa-trash\" aria-hidden=\"true\"></i> {{ 'app.delete'|trans }}
                                                        </a>
                                                    {% endif %}
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td class=\"text-nowrap\">
                                        {{ app_translate_text(transTypes, user.userTypeTranslateKey) }}
                                    </td>

                                    <td class=\"text-nowrap\">
                                        {{ app_translate_text(transGroups, user.userGroupTranslateKey) }}
                                    </td>

                                    <td>
                                        {{ user.active|app_html_toggle|raw }}
                                    </td>

                                    <td>
                                        {{ user.verified|app_html_toggle|raw }}
                                    </td>

                                    <td class=\"text-right text-nowrap\">
                                        <div class=\"d-none d-sm-block\">
                                            {% if acl_is_accessible('admin', 'user', 'edit') %}
                                                <a class=\"btn btn-sm btn-info\"
                                                   href=\"{{ path('admin_user_edit', { id: user.id }) }}\">
                                                    <i class=\"fas fa-pencil-alt\">
                                                    </i>
                                                    {{ 'app.edit'|trans }}
                                                </a>
                                            {% endif %}

                                            {% if acl_is_accessible('admin', 'user', 'delete') %}
                                                <a class=\"btn btn-sm btn-danger\"
                                                   href=\"#\"
                                                   onclick=\"return confirm('{{ 'app.user.delete_confirmation_dialog'|trans }}')\">
                                                    <i class=\"fas fa-trash\"></i>
                                                    {{ 'app.delete'|trans }}
                                                </a>
                                            {% endif %}
                                        </div>
                                    </td>
                                </tr>
                            {% endfor %}
                            </tbody>
                        </table>
                    </div>

                    <div class=\"card-footer clearfix bg-white py-0\">
                        {{ knp_pagination_render(users, null, {}, {align: 'right'}) }}
                    </div>
                </div>
            {% else %}
                <div class=\"content-empty-results\">
                    <p>{{ 'app.list.not_exist_results'|trans }}</p>
                </div>
            {% endif %}
        </div>
    </section>
{% endblock %}
", "admin/user/index.html.twig", "/Users/thomaskaenzig/projects/language-exchange/admin/templates/admin/user/index.html.twig");
    }
}
