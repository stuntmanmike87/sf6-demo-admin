<?php

namespace ContainerNBaxtRd;
include_once \dirname(__DIR__, 4).'/vendor/doctrine/persistence/src/Persistence/ObjectManager.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
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

    public function getConnection()
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'getConnection', array(), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'getMetadataFactory', array(), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'getExpressionBuilder', array(), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'beginTransaction', array(), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->beginTransaction();
    }

    public function getCache()
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'getCache', array(), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->getCache();
    }

    public function transactional($func)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'transactional', array('func' => $func), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->transactional($func);
    }

    public function wrapInTransaction(callable $func)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'wrapInTransaction', array('func' => $func), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->wrapInTransaction($func);
    }

    public function commit()
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'commit', array(), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->commit();
    }

    public function rollback()
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'rollback', array(), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'getClassMetadata', array('className' => $className), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'createQuery', array('dql' => $dql), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'createNamedQuery', array('name' => $name), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'createQueryBuilder', array(), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'flush', array('entity' => $entity), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'clear', array('entityName' => $entityName), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->clear($entityName);
    }

    public function close()
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'close', array(), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->close();
    }

    public function persist($entity)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'persist', array('entity' => $entity), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'remove', array('entity' => $entity), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'refresh', array('entity' => $entity), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'detach', array('entity' => $entity), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'merge', array('entity' => $entity), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'getRepository', array('entityName' => $entityName), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'contains', array('entity' => $entity), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'getEventManager', array(), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'getConfiguration', array(), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'isOpen', array(), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'getUnitOfWork', array(), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'getProxyFactory', array(), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'initializeObject', array('obj' => $obj), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'getFilters', array(), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'isFiltersStateClean', array(), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, 'hasFilters', array(), $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        return $this->valueHolder2627e->hasFilters();
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

        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);

        $instance->initializerc13a4 = $initializer;

        return $instance;
    }

    public function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config)
    {
        static $reflection;

        if (! $this->valueHolder2627e) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolder2627e = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolder2627e->__construct($conn, $config);
    }

    public function & __get($name)
    {
        $this->initializerc13a4 && ($this->initializerc13a4->__invoke($valueHolder2627e, $this, '__get', ['name' => $name], $this->initializerc13a4) || 1) && $this->valueHolder2627e = $valueHolder2627e;

        if (isset(self::$publicProperties30c20[$name])) {
            return $this->valueHolder2627e->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

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

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

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

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

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

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

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
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
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

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
