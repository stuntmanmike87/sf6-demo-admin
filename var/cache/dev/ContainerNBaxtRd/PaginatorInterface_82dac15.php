<?php

namespace ContainerNBaxtRd;
include_once \dirname(__DIR__, 4).'/vendor/knplabs/knp-components/src/Knp/Component/Pager/PaginatorInterface.php';
include_once \dirname(__DIR__, 4).'/vendor/knplabs/knp-components/src/Knp/Component/Pager/Paginator.php';

class PaginatorInterface_82dac15 implements \ProxyManager\Proxy\VirtualProxyInterface, \Knp\Component\Pager\PaginatorInterface
{
    /**
     * @var \Knp\Component\Pager\PaginatorInterface|null wrapped object, if the proxy is initialized
     */
    private $valueHolder2627e = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializerc13a4 = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicProperties30c20 = [
        
    ];

    public function paginate(mixed $target, int $page = 1, ?int $limit = null, array $options = []) : \Knp\Component\Pager\Pagination\PaginationInterface
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'paginate', array('target' => $target, 'page' => $page, 'limit' => $limit, 'options' => $options), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        if ($this->valueHolder2627e === $returnValue = $this->valueHolder2627e->paginate($target, $page, $limit, $options)) {
            return $this;
        }

        return $returnValue;
    }

    /**
     * Constructor for lazy initialization
     *
     * @param \Closure|null $initializer
     */
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;

        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();

        $instance->initializerc13a4 = $initializer;

        return $instance;
    }

    public function __construct()
    {
        static $reflection;

        if (! $this->valueHolder2627e) {
            $reflection = $reflection ?? new \ReflectionClass('Knp\\Component\\Pager\\PaginatorInterface');
            $this->valueHolder2627e = $reflection->newInstanceWithoutConstructor();
        }
    }

    public function & __get($name)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, '__get', ['name' => $name], $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        if (isset(self::$publicProperties30c20[$name])) {
            return $this->valueHolder2627e->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Knp\\Component\\Pager\\PaginatorInterface');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder2627e;

            $backtrace = debug_backtrace(false, 1);
            trigger_error(
                sprintf(
                    'Undefined property: %s::$%s in %s on line %s',
                    $realInstanceReflection->getName(),
                    $name,
                    $backtrace[0]['file'],
                    $backtrace[0]['line']
                ),
                \E_USER_NOTICE
            );
            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder2627e;
        $accessor = function & () use ($targetObject, $name) {
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __set($name, $value)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, '__set', array('name' => $name, 'value' => $value), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        $realInstanceReflection = new \ReflectionClass('Knp\\Component\\Pager\\PaginatorInterface');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder2627e;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder2627e;
        $accessor = function & () use ($targetObject, $name, $value) {
            $targetObject->$name = $value;

            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __isset($name)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, '__isset', array('name' => $name), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        $realInstanceReflection = new \ReflectionClass('Knp\\Component\\Pager\\PaginatorInterface');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder2627e;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolder2627e;
        $accessor = function () use ($targetObject, $name) {
            return isset($targetObject->$name);
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = $accessor();

        return $returnValue;
    }

    public function __unset($name)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, '__unset', array('name' => $name), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        $realInstanceReflection = new \ReflectionClass('Knp\\Component\\Pager\\PaginatorInterface');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder2627e;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolder2627e;
        $accessor = function () use ($targetObject, $name) {
            unset($targetObject->$name);

            return;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $accessor();
    }

    public function __clone()
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, '__clone', array(), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        $this->valueHolder2627e = clone $this->valueHolder2627e;
    }

    public function __sleep()
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, '__sleep', array(), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return array('valueHolder2627e');
    }

    public function __wakeup()
    {
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializerc13a4 = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializerc13a4;
    }

    public function initializeProxy() : bool
    {
        return $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'initializeProxy', array(), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolder2627e;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolder2627e;
    }
}

if (!\class_exists('PaginatorInterface_82dac15', false)) {
    \class_alias(__NAMESPACE__.'\\PaginatorInterface_82dac15', 'PaginatorInterface_82dac15', false);
}
