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

/* forms/bootstrap_4_layout.html.twig */
class __TwigTemplate_b1d17400ba2f3947014b083aa05f03e8 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'button_widget' => [$this, 'block_button_widget'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "bootstrap_4_layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "forms/bootstrap_4_layout.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "forms/bootstrap_4_layout.html.twig"));

        $this->parent = $this->loadTemplate("bootstrap_4_layout.html.twig", "forms/bootstrap_4_layout.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 3
    public function block_button_widget($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "button_widget"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "button_widget"));

        // line 4
        if (twig_test_empty((isset($context["label"]) || array_key_exists("label", $context) ? $context["label"] : (function () { throw new RuntimeError('Variable "label" does not exist.', 4, $this->source); })()))) {
            // line 5
            if ( !twig_test_empty((isset($context["label_format"]) || array_key_exists("label_format", $context) ? $context["label_format"] : (function () { throw new RuntimeError('Variable "label_format" does not exist.', 5, $this->source); })()))) {
                // line 6
                $context["label"] = twig_replace_filter((isset($context["label_format"]) || array_key_exists("label_format", $context) ? $context["label_format"] : (function () { throw new RuntimeError('Variable "label_format" does not exist.', 6, $this->source); })()), ["%name%" =>                 // line 7
(isset($context["name"]) || array_key_exists("name", $context) ? $context["name"] : (function () { throw new RuntimeError('Variable "name" does not exist.', 7, $this->source); })()), "%id%" =>                 // line 8
(isset($context["id"]) || array_key_exists("id", $context) ? $context["id"] : (function () { throw new RuntimeError('Variable "id" does not exist.', 8, $this->source); })())]);
            } elseif ((            // line 10
(isset($context["label"]) || array_key_exists("label", $context) ? $context["label"] : (function () { throw new RuntimeError('Variable "label" does not exist.', 10, $this->source); })()) === false)) {
                // line 11
                $context["translation_domain"] = false;
            } else {
                // line 13
                $context["label"] = $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->humanize((isset($context["name"]) || array_key_exists("name", $context) ? $context["name"] : (function () { throw new RuntimeError('Variable "name" does not exist.', 13, $this->source); })()));
            }
        }
        // line 17
        echo "<button type=\"";
        echo twig_escape_filter($this->env, ((array_key_exists("type", $context)) ? (_twig_default_filter((isset($context["type"]) || array_key_exists("type", $context) ? $context["type"] : (function () { throw new RuntimeError('Variable "type" does not exist.', 17, $this->source); })()), "button")) : ("button")), "html", null, true);
        echo "\" ";
        $this->displayBlock("button_attributes", $context, $blocks);
        echo ">
        ";
        // line 18
        if ((array_key_exists("icon_before", $context) &&  !(null === (isset($context["icon_before"]) || array_key_exists("icon_before", $context) ? $context["icon_before"] : (function () { throw new RuntimeError('Variable "icon_before" does not exist.', 18, $this->source); })())))) {
            // line 19
            echo "            <i class=\"fas ";
            echo twig_escape_filter($this->env, (isset($context["icon_before"]) || array_key_exists("icon_before", $context) ? $context["icon_before"] : (function () { throw new RuntimeError('Variable "icon_before" does not exist.', 19, $this->source); })()), "html", null, true);
            echo "\"></i>
        ";
        }
        // line 21
        echo "
        ";
        // line 22
        echo twig_escape_filter($this->env, ((((isset($context["translation_domain"]) || array_key_exists("translation_domain", $context) ? $context["translation_domain"] : (function () { throw new RuntimeError('Variable "translation_domain" does not exist.', 22, $this->source); })()) === false)) ? ((isset($context["label"]) || array_key_exists("label", $context) ? $context["label"] : (function () { throw new RuntimeError('Variable "label" does not exist.', 22, $this->source); })())) : ($this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans((isset($context["label"]) || array_key_exists("label", $context) ? $context["label"] : (function () { throw new RuntimeError('Variable "label" does not exist.', 22, $this->source); })()), [], (isset($context["translation_domain"]) || array_key_exists("translation_domain", $context) ? $context["translation_domain"] : (function () { throw new RuntimeError('Variable "translation_domain" does not exist.', 22, $this->source); })())))), "html", null, true);
        echo "

        ";
        // line 24
        if ((array_key_exists("icon_after", $context) &&  !(null === (isset($context["icon_after"]) || array_key_exists("icon_after", $context) ? $context["icon_after"] : (function () { throw new RuntimeError('Variable "icon_after" does not exist.', 24, $this->source); })())))) {
            // line 25
            echo "            <i class=\"fas ";
            echo twig_escape_filter($this->env, (isset($context["icon_after"]) || array_key_exists("icon_after", $context) ? $context["icon_after"] : (function () { throw new RuntimeError('Variable "icon_after" does not exist.', 25, $this->source); })()), "html", null, true);
            echo "\"></i>
        ";
        }
        // line 27
        echo "    </button>";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    public function getTemplateName()
    {
        return "forms/bootstrap_4_layout.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  116 => 27,  110 => 25,  108 => 24,  103 => 22,  100 => 21,  94 => 19,  92 => 18,  85 => 17,  81 => 13,  78 => 11,  76 => 10,  74 => 8,  73 => 7,  72 => 6,  70 => 5,  68 => 4,  58 => 3,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'bootstrap_4_layout.html.twig' %}

{%- block button_widget -%}
    {%- if label is empty -%}
        {%- if label_format is not empty -%}
            {% set label = label_format|replace({
                '%name%': name,
                '%id%': id,
            }) %}
        {%- elseif label is same as(false) -%}
            {% set translation_domain = false %}
        {%- else -%}
            {% set label = name|humanize %}
        {%- endif -%}
    {%- endif -%}

    <button type=\"{{ type|default('button') }}\" {{ block('button_attributes') }}>
        {% if icon_before is defined and icon_before is not null %}
            <i class=\"fas {{ icon_before }}\"></i>
        {% endif %}

        {{ translation_domain is same as(false) ? label : label|trans({}, translation_domain) }}

        {% if icon_after is defined and icon_after is not null %}
            <i class=\"fas {{ icon_after }}\"></i>
        {% endif %}
    </button>
{%- endblock button_widget -%}
", "forms/bootstrap_4_layout.html.twig", "/Users/thomaskaenzig/projects/language-exchange/admin/templates/forms/bootstrap_4_layout.html.twig");
    }
}
