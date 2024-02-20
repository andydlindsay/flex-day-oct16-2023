# M07W17 - What is React State?

### To Do
- [x] What is state?
- [x] Closure review
- [x] Reading and setting state
- [x] Lifting state up

### What is React state?
* state === data
* state belongs to a component (created by the component)
* props come from the outside

### useState
* hook (functions)
* Feb 2019
* hook into the React lifecycle
* all hooks start with `use`
* hooks have to be called unconditionally and in the same order

### When do React functions get called?
* whenever state or props change


* Counter - state: count
  

* HigherComp
  * App - state: count
    * Header - props: count
    * Counter - props: count
      * Display - props: count
      * Button - props: increment





























