<?php

$finder = Symfony\Component\Finder\Finder::create()
    ->notPath('vendor')
    ->notPath('bootstrap')
    ->notPath('storage')
    ->in(__DIR__)
    ->name('*.php')
    ->notName('*.blade.php');

return PhpCsFixer\Config::create()
    ->setRules([
        '@PSR2' => true,
        'array_syntax' => ['syntax' => 'short'],
        'array_indentation' => true,
        'ordered_imports' => ['sortAlgorithm' => 'alpha'],
        'no_unused_imports' => true,
        'single_quote' => true,
        'no_unused_imports' => true,
        'method_chaining_indentation' => true,
        'binary_operator_spaces' => ['default' => 'single_space'],
    ])
    ->setFinder($finder);
