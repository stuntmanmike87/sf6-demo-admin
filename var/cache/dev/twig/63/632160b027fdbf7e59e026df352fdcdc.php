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

/* admin/user/add.html.twig */
class __TwigTemplate_c4e609bcd0ec0254ed65169ae9df1e2f extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'headerNavbar' => [$this, 'block_headerNavbar'],
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/user/add.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/user/add.html.twig"));

        $this->parent = $this->loadTemplate("admin.html.twig", "admin/user/add.html.twig", 1);
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
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.user.edit_user"), "html", null, true);
        echo " ";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 5
    public function block_headerNavbar($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "headerNavbar"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "headerNavbar"));

        // line 6
        echo "    <li class=\"nav-item\">
        ";
        // line 7
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 7, $this->source); })()), "submit", [], "any", false, false, false, 7), 'widget', ["label" => "app.user.form.button.save_user", "icon_before" => "fa-save", "attr" => ["form" => "form_user", "class" => "nav-link btn"]]);
        // line 14
        echo "
    </li>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 18
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 19
        echo "    <section class=\"content-header\">
        <div class=\"container-fluid\">
            <div class=\"row mb-2\">
                <div class=\"col-sm-6\">
                    <h1>";
        // line 23
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.user.add_user"), "html", null, true);
        echo "</h1>
                </div>

                <div class=\"col-sm-6\">
                    <ol class=\"breadcrumb float-sm-right\">
                        <li class=\"breadcrumb-item\">
                            <a href=\"";
        // line 29
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("admin_user_index");
        echo "\">
                                ";
        // line 30
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.users"), "html", null, true);
        echo "
                            </a>
                        </li>

                        <li class=\"breadcrumb-item active\">
                            ";
        // line 35
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.user.add_user"), "html", null, true);
        echo "
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </section>

    ";
        // line 43
        $context["csrfApiToken"] = $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderCsrfToken("api");
        // line 44
        echo "
    <section class=\"content\">
        <div class=\"container-fluid\">
            ";
        // line 47
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 47, $this->source); })()), 'form_start', ["attr" => ["id" => "form_user"]]);
        echo "
                ";
        // line 48
        twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 48, $this->source); })()), "phone_number", [], "any", false, false, false, 48), "setRendered", [], "method", false, false, false, 48);
        // line 49
        echo "                ";
        twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 49, $this->source); })()), "phone_number_country_id", [], "any", false, false, false, 49), "setRendered", [], "method", false, false, false, 49);
        // line 50
        echo "
                ";
        // line 52
        echo "                <div class=\"card\">
                    <div class=\"card-header\">
                        <h3 class=\"card-title\">
                            ";
        // line 55
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.basic_information"), "html", null, true);
        echo "
                        </h3>
                    </div>

                    <div class=\"card-body\">
                        <div class=\"row\">
                            <div class=\"col-md-3\">
                                ";
        // line 62
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 62, $this->source); })()), "first_name", [], "any", false, false, false, 62), 'row');
        echo "
                            </div>

                            <div class=\"col-md-3\">
                                ";
        // line 66
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 66, $this->source); })()), "last_name", [], "any", false, false, false, 66), 'row');
        echo "
                            </div>

                            <div class=\"col-md-3\">
                                ";
        // line 70
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 70, $this->source); })()), "user_type_id", [], "any", false, false, false, 70), 'row');
        echo "
                            </div>
                        </div>

                        <div class=\"row\">
                            <div class=\"col-md-4\">
                                ";
        // line 76
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 76, $this->source); })()), "birthday", [], "any", false, false, false, 76), 'label');
        echo "

                                <div class=\"input-group mb-3\" id=\"";
        // line 78
        echo twig_escape_filter($this->env, $this->extensions['Sulu\Twig\Extensions\ComponentExtension']->registerComponent("datepicker", ["locale" => twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source,         // line 79
(isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 79, $this->source); })()), "request", [], "any", false, false, false, 79), "locale", [], "any", false, false, false, 79), "changeMonth" => true, "changeYear" => true]), "html", null, true);
        // line 82
        echo "\">
                                    <div class=\"input-group-prepend\">
                                        <span class=\"input-group-text\"><i class=\"fas fa-calendar\" aria-hidden=\"true\"></i></span>
                                    </div>

                                    ";
        // line 87
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 87, $this->source); })()), "birthday", [], "any", false, false, false, 87), 'widget', ["attr" => ["class" => "js-datepicker"]]);
        // line 89
        echo "
                                </div>

                                <div class=\"form-error\">
                                    ";
        // line 93
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 93, $this->source); })()), "birthday", [], "any", false, false, false, 93), 'errors');
        echo "
                                </div>
                            </div>
                        </div>

                        <div class=\"row\">
                            <div class=\"col-md-8\">
                                ";
        // line 100
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 100, $this->source); })()), "bio", [], "any", false, false, false, 100), 'row');
        echo "
                            </div>
                        </div>

                        <div class=\"row\">
                            <div class=\"col-md-6\">
                                ";
        // line 106
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 106, $this->source); })()), "tmp_url_avatar", [], "any", false, false, false, 106), 'row');
        echo "

                                ";
        // line 108
        if ( !twig_test_empty(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 108, $this->source); })()), "vars", [], "any", false, false, false, 108), "data", [], "any", false, false, false, 108), "urlPicture", [], "any", false, false, false, 108))) {
            // line 109
            echo "                                    <img src=\"";
            echo twig_escape_filter($this->env, $this->env->getRuntime('App\Twig\Runtime\WebsiteExtensionRuntime')->getImage(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 109, $this->source); })()), "vars", [], "any", false, false, false, 109), "data", [], "any", false, false, false, 109), "urlPicture", [], "any", false, false, false, 109), ["w" => 320, "h" => 320]), "html", null, true);
            echo "\"
                                         class=\"img-rounded img-responsive client-form__image mb-3\"
                                         alt=\"\">

                                    ";
            // line 113
            echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 113, $this->source); })()), "delete_url_avatar", [], "any", false, false, false, 113), 'row');
            echo "
                                ";
        } else {
            // line 115
            echo "                                    ";
            twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 115, $this->source); })()), "delete_url_avatar", [], "any", false, false, false, 115), "setRendered", [], "method", false, false, false, 115);
            // line 116
            echo "                                ";
        }
        // line 117
        echo "                            </div>
                        </div>
                    </div>
                </div>

                ";
        // line 123
        echo "                <div class=\"card\">
                    <div class=\"card-header\">
                        <h3 class=\"card-title\">
                            ";
        // line 126
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.access_information"), "html", null, true);
        echo "
                        </h3>
                    </div>

                    <div class=\"card-body\">
                        <div class=\"row\">
                            <div class=\"col-md-2\">
                                ";
        // line 133
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 133, $this->source); })()), "active", [], "any", false, false, false, 133), 'row');
        echo "
                            </div>

                            <div class=\"col-md-2\">
                                ";
        // line 137
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 137, $this->source); })()), "verified", [], "any", false, false, false, 137), 'row');
        echo "
                            </div>
                        </div>

                        <div class=\"row\">
                            <div class=\"col-md-3\">
                                ";
        // line 143
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 143, $this->source); })()), "username", [], "any", false, false, false, 143), 'row');
        echo "
                            </div>

                            <div class=\"col-md-3\">
                                ";
        // line 147
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 147, $this->source); })()), "plainPassword", [], "any", false, false, false, 147), "first", [], "any", false, false, false, 147), 'row');
        echo "
                            </div>

                            <div class=\"col-md-3\">
                                ";
        // line 151
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 151, $this->source); })()), "plainPassword", [], "any", false, false, false, 151), "second", [], "any", false, false, false, 151), 'row');
        echo "
                            </div>
                        </div>

                        <div class=\"row\">
                            <div class=\"col-md-3\">
                                ";
        // line 157
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 157, $this->source); })()), "acl_user_group_id", [], "any", false, false, false, 157), 'row');
        echo "
                            </div>
                        </div>
                    </div>
                </div>

                ";
        // line 164
        echo "                <div class=\"card\">
                    <div class=\"card-header with-border\">
                        <h3 class=\"card-title\">
                            ";
        // line 167
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.contact_details"), "html", null, true);
        echo "
                        </h3>
                    </div>

                    <div class=\"card-body\">
                        <div class=\"row\">
                            <div class=\"col-md-4\">
                                ";
        // line 174
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 174, $this->source); })()), "email", [], "any", false, false, false, 174), 'row');
        echo "
                            </div>

                            ";
        // line 177
        $context["componentPhoneNumber"] = $this->extensions['Sulu\Twig\Extensions\ComponentExtension']->registerComponent("phone-number", ["locale" => twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source,         // line 178
(isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 178, $this->source); })()), "request", [], "any", false, false, false, 178), "locale", [], "any", false, false, false, 178), "value" => ((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source,         // line 179
($context["form"] ?? null), "vars", [], "any", false, true, false, 179), "data", [], "any", false, true, false, 179), "phoneNumber", [], "any", true, true, false, 179)) ? (_twig_default_filter(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "vars", [], "any", false, true, false, 179), "data", [], "any", false, true, false, 179), "phoneNumber", [], "any", false, false, false, 179))) : ("")), "locationCountryId" => ((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source,         // line 180
($context["form"] ?? null), "vars", [], "any", false, true, false, 180), "data", [], "any", false, true, false, 180), "getPhoneNumberCountry", [], "any", false, true, false, 180), "id", [], "any", true, true, false, 180)) ? (_twig_default_filter(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "vars", [], "any", false, true, false, 180), "data", [], "any", false, true, false, 180), "getPhoneNumberCountry", [], "any", false, true, false, 180), "id", [], "any", false, false, false, 180))) : ("")), "prefixEntity" => twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source,         // line 181
(isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 181, $this->source); })()), "vars", [], "any", false, false, false, 181), "full_name", [], "any", false, false, false, 181), "translations" => ["choose" => $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.form.label.choose"), "label" => $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.user.form.label.phone_number"), "selectCountryCallingCode" => $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.user.select_country_calling_code")], "countryCallingCodes" => json_encode($this->env->getRuntime('App\Twig\Runtime\WebsiteExtensionRuntime')->getCountryCallingCodes())]);
        // line 189
        echo "
                            <div id=\"";
        // line 190
        echo twig_escape_filter($this->env, (isset($context["componentPhoneNumber"]) || array_key_exists("componentPhoneNumber", $context) ? $context["componentPhoneNumber"] : (function () { throw new RuntimeError('Variable "componentPhoneNumber" does not exist.', 190, $this->source); })()), "html", null, true);
        echo "\" class=\"col-md-4\"></div>
                        </div>
                    </div>
                </div>

                ";
        // line 196
        echo "                <div class=\"card\">
                    <div class=\"card-header\">
                        <h3 class=\"card-title\">
                            ";
        // line 199
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.address_information"), "html", null, true);
        echo "
                        </h3>
                    </div>

                    <div class=\"card-body\">
                        ";
        // line 204
        $this->loadTemplate("admin/includes/form/card-location-google-maps.html.twig", "admin/user/add.html.twig", 204)->display(twig_array_merge($context, ["form" =>         // line 205
(isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 205, $this->source); })()), "apiToken" =>         // line 206
(isset($context["csrfApiToken"]) || array_key_exists("csrfApiToken", $context) ? $context["csrfApiToken"] : (function () { throw new RuntimeError('Variable "csrfApiToken" does not exist.', 206, $this->source); })())]));
        // line 208
        echo "                    </div>
                </div>

                ";
        // line 212
        echo "                <div class=\"row mb-3\">
                    <div class=\"col-12 d-flex justify-content-end\">
                        <button id=\"";
        // line 214
        echo twig_escape_filter($this->env, $this->extensions['Sulu\Twig\Extensions\ComponentExtension']->registerComponent("button-loading"), "html", null, true);
        echo "\" type=\"submit\" class=\"btn btn-lg btn-primary button-loading\">
                            <i class=\"fas fa-save mr-2 js-button-loading--removing\"></i> ";
        // line 215
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.user.form.button.save_user"), "html", null, true);
        echo "
                        </button>
                    </div>
                </div>
            ";
        // line 219
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 219, $this->source); })()), 'form_end');
        echo "
        </div>
    </section>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    public function getTemplateName()
    {
        return "admin/user/add.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  426 => 219,  419 => 215,  415 => 214,  411 => 212,  406 => 208,  404 => 206,  403 => 205,  402 => 204,  394 => 199,  389 => 196,  381 => 190,  378 => 189,  376 => 181,  375 => 180,  374 => 179,  373 => 178,  372 => 177,  366 => 174,  356 => 167,  351 => 164,  342 => 157,  333 => 151,  326 => 147,  319 => 143,  310 => 137,  303 => 133,  293 => 126,  288 => 123,  281 => 117,  278 => 116,  275 => 115,  270 => 113,  262 => 109,  260 => 108,  255 => 106,  246 => 100,  236 => 93,  230 => 89,  228 => 87,  221 => 82,  219 => 79,  218 => 78,  213 => 76,  204 => 70,  197 => 66,  190 => 62,  180 => 55,  175 => 52,  172 => 50,  169 => 49,  167 => 48,  163 => 47,  158 => 44,  156 => 43,  145 => 35,  137 => 30,  133 => 29,  124 => 23,  118 => 19,  108 => 18,  96 => 14,  94 => 7,  91 => 6,  81 => 5,  60 => 3,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'admin.html.twig' %}

{% block title %} {{ 'app.user.edit_user'|trans }} {% endblock %}

{% block headerNavbar %}
    <li class=\"nav-item\">
        {{ form_widget(form.submit, {
            label: 'app.user.form.button.save_user',
            icon_before: 'fa-save',
            attr: {
                form: 'form_user',
                class: 'nav-link btn'
            }
        }) }}
    </li>
{% endblock %}

{% block body %}
    <section class=\"content-header\">
        <div class=\"container-fluid\">
            <div class=\"row mb-2\">
                <div class=\"col-sm-6\">
                    <h1>{{ 'app.user.add_user'|trans }}</h1>
                </div>

                <div class=\"col-sm-6\">
                    <ol class=\"breadcrumb float-sm-right\">
                        <li class=\"breadcrumb-item\">
                            <a href=\"{{ path('admin_user_index') }}\">
                                {{ 'app.users'|trans }}
                            </a>
                        </li>

                        <li class=\"breadcrumb-item active\">
                            {{ 'app.user.add_user'|trans }}
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </section>

    {% set csrfApiToken = csrf_token('api') %}

    <section class=\"content\">
        <div class=\"container-fluid\">
            {{ form_start(form, {attr: {id: 'form_user'}}) }}
                {% do form.phone_number.setRendered() %}
                {% do form.phone_number_country_id.setRendered() %}

                {# Card of basic information. #}
                <div class=\"card\">
                    <div class=\"card-header\">
                        <h3 class=\"card-title\">
                            {{ 'app.basic_information'|trans }}
                        </h3>
                    </div>

                    <div class=\"card-body\">
                        <div class=\"row\">
                            <div class=\"col-md-3\">
                                {{ form_row(form.first_name) }}
                            </div>

                            <div class=\"col-md-3\">
                                {{ form_row(form.last_name) }}
                            </div>

                            <div class=\"col-md-3\">
                                {{ form_row(form.user_type_id) }}
                            </div>
                        </div>

                        <div class=\"row\">
                            <div class=\"col-md-4\">
                                {{ form_label(form.birthday) }}

                                <div class=\"input-group mb-3\" id=\"{{ register_component('datepicker', {
                                    locale: app.request.locale,
                                    changeMonth: true,
                                    changeYear: true,
                                })}}\">
                                    <div class=\"input-group-prepend\">
                                        <span class=\"input-group-text\"><i class=\"fas fa-calendar\" aria-hidden=\"true\"></i></span>
                                    </div>

                                    {{ form_widget(form.birthday, {
                                        'attr': {'class': 'js-datepicker'}}
                                    )}}
                                </div>

                                <div class=\"form-error\">
                                    {{ form_errors(form.birthday) }}
                                </div>
                            </div>
                        </div>

                        <div class=\"row\">
                            <div class=\"col-md-8\">
                                {{ form_row(form.bio) }}
                            </div>
                        </div>

                        <div class=\"row\">
                            <div class=\"col-md-6\">
                                {{ form_row(form.tmp_url_avatar) }}

                                {% if form.vars.data.urlPicture is not empty %}
                                    <img src=\"{{ app_image(form.vars.data.urlPicture, {'w': 320, 'h': 320}) }}\"
                                         class=\"img-rounded img-responsive client-form__image mb-3\"
                                         alt=\"\">

                                    {{ form_row(form.delete_url_avatar) }}
                                {% else %}
                                    {% do form.delete_url_avatar.setRendered() %}
                                {% endif %}
                            </div>
                        </div>
                    </div>
                </div>

                {# Card of access information (login & password). #}
                <div class=\"card\">
                    <div class=\"card-header\">
                        <h3 class=\"card-title\">
                            {{ 'app.access_information'|trans }}
                        </h3>
                    </div>

                    <div class=\"card-body\">
                        <div class=\"row\">
                            <div class=\"col-md-2\">
                                {{ form_row(form.active) }}
                            </div>

                            <div class=\"col-md-2\">
                                {{ form_row(form.verified) }}
                            </div>
                        </div>

                        <div class=\"row\">
                            <div class=\"col-md-3\">
                                {{ form_row(form.username) }}
                            </div>

                            <div class=\"col-md-3\">
                                {{ form_row(form.plainPassword.first) }}
                            </div>

                            <div class=\"col-md-3\">
                                {{ form_row(form.plainPassword.second) }}
                            </div>
                        </div>

                        <div class=\"row\">
                            <div class=\"col-md-3\">
                                {{ form_row(form.acl_user_group_id) }}
                            </div>
                        </div>
                    </div>
                </div>

                {# Card of contacts. #}
                <div class=\"card\">
                    <div class=\"card-header with-border\">
                        <h3 class=\"card-title\">
                            {{ 'app.contact_details'|trans }}
                        </h3>
                    </div>

                    <div class=\"card-body\">
                        <div class=\"row\">
                            <div class=\"col-md-4\">
                                {{ form_row(form.email) }}
                            </div>

                            {% set componentPhoneNumber = register_component('phone-number', {
                                locale: app.request.locale,
                                value: form.vars.data.phoneNumber|default(),
                                locationCountryId: form.vars.data.getPhoneNumberCountry.id|default(),
                                prefixEntity: form.vars.full_name,
                                translations: {
                                    choose: 'app.form.label.choose'|trans,
                                    label: 'app.user.form.label.phone_number'|trans,
                                    selectCountryCallingCode: 'app.user.select_country_calling_code'|trans
                                },
                                countryCallingCodes: app_country_calling_codes()|json_encode(),
                            }) %}

                            <div id=\"{{ componentPhoneNumber }}\" class=\"col-md-4\"></div>
                        </div>
                    </div>
                </div>

                {# Card of location. #}
                <div class=\"card\">
                    <div class=\"card-header\">
                        <h3 class=\"card-title\">
                            {{ 'app.address_information'|trans }}
                        </h3>
                    </div>

                    <div class=\"card-body\">
                        {% include 'admin/includes/form/card-location-google-maps.html.twig' with {
                            form: form,
                            apiToken: csrfApiToken,
                        } %}
                    </div>
                </div>

                {# Submit. #}
                <div class=\"row mb-3\">
                    <div class=\"col-12 d-flex justify-content-end\">
                        <button id=\"{{ register_component('button-loading') }}\" type=\"submit\" class=\"btn btn-lg btn-primary button-loading\">
                            <i class=\"fas fa-save mr-2 js-button-loading--removing\"></i> {{ 'app.user.form.button.save_user'|trans }}
                        </button>
                    </div>
                </div>
            {{ form_end(form) }}
        </div>
    </section>
{% endblock %}
", "admin/user/add.html.twig", "/Users/thomaskaenzig/projects/language-exchange/admin/templates/admin/user/add.html.twig");
    }
}
