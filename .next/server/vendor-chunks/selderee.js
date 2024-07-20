"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/selderee";
exports.ids = ["vendor-chunks/selderee"];
exports.modules = {

/***/ "(rsc)/./node_modules/selderee/lib/selderee.mjs":
/*!************************************************!*\
  !*** ./node_modules/selderee/lib/selderee.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ast: () => (/* binding */ Ast),\n/* harmony export */   DecisionTree: () => (/* binding */ DecisionTree),\n/* harmony export */   Picker: () => (/* binding */ Picker),\n/* harmony export */   Treeify: () => (/* binding */ TreeifyBuilder),\n/* harmony export */   Types: () => (/* binding */ Types)\n/* harmony export */ });\n/* harmony import */ var parseley__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parseley */ \"(rsc)/./node_modules/parseley/lib/parseley.mjs\");\n\n\n\nvar Ast = /*#__PURE__*/Object.freeze({\n    __proto__: null\n});\n\nvar Types = /*#__PURE__*/Object.freeze({\n    __proto__: null\n});\n\nconst treeify = (nodes) => '▽\\n' + treeifyArray(nodes, thinLines);\nconst thinLines = [['├─', '│ '], ['└─', '  ']];\nconst heavyLines = [['┠─', '┃ '], ['┖─', '  ']];\nconst doubleLines = [['╟─', '║ '], ['╙─', '  ']];\nfunction treeifyArray(nodes, tpl = heavyLines) {\n    return prefixItems(tpl, nodes.map(n => treeifyNode(n)));\n}\nfunction treeifyNode(node) {\n    switch (node.type) {\n        case 'terminal': {\n            const vctr = node.valueContainer;\n            return `◁ #${vctr.index} ${JSON.stringify(vctr.specificity)} ${vctr.value}`;\n        }\n        case 'tagName':\n            return `◻ Tag name\\n${treeifyArray(node.variants, doubleLines)}`;\n        case 'attrValue':\n            return `▣ Attr value: ${node.name}\\n${treeifyArray(node.matchers, doubleLines)}`;\n        case 'attrPresence':\n            return `◨ Attr presence: ${node.name}\\n${treeifyArray(node.cont)}`;\n        case 'pushElement':\n            return `◉ Push element: ${node.combinator}\\n${treeifyArray(node.cont, thinLines)}`;\n        case 'popElement':\n            return `◌ Pop element\\n${treeifyArray(node.cont, thinLines)}`;\n        case 'variant':\n            return `◇ = ${node.value}\\n${treeifyArray(node.cont)}`;\n        case 'matcher':\n            return `◈ ${node.matcher} \"${node.value}\"${node.modifier || ''}\\n${treeifyArray(node.cont)}`;\n    }\n}\nfunction prefixItems(tpl, items) {\n    return items\n        .map((item, i, { length }) => prefixItem(tpl, item, i === length - 1))\n        .join('\\n');\n}\nfunction prefixItem(tpl, item, tail = true) {\n    const tpl1 = tpl[tail ? 1 : 0];\n    return tpl1[0] + item.split('\\n').join('\\n' + tpl1[1]);\n}\n\nvar TreeifyBuilder = /*#__PURE__*/Object.freeze({\n    __proto__: null,\n    treeify: treeify\n});\n\nclass DecisionTree {\n    constructor(input) {\n        this.branches = weave(toAstTerminalPairs(input));\n    }\n    build(builder) {\n        return builder(this.branches);\n    }\n}\nfunction toAstTerminalPairs(array) {\n    const len = array.length;\n    const results = new Array(len);\n    for (let i = 0; i < len; i++) {\n        const [selectorString, val] = array[i];\n        const ast = preprocess(parseley__WEBPACK_IMPORTED_MODULE_0__.parse1(selectorString));\n        results[i] = {\n            ast: ast,\n            terminal: {\n                type: 'terminal',\n                valueContainer: { index: i, value: val, specificity: ast.specificity }\n            }\n        };\n    }\n    return results;\n}\nfunction preprocess(ast) {\n    reduceSelectorVariants(ast);\n    parseley__WEBPACK_IMPORTED_MODULE_0__.normalize(ast);\n    return ast;\n}\nfunction reduceSelectorVariants(ast) {\n    const newList = [];\n    ast.list.forEach(sel => {\n        switch (sel.type) {\n            case 'class':\n                newList.push({\n                    matcher: '~=',\n                    modifier: null,\n                    name: 'class',\n                    namespace: null,\n                    specificity: sel.specificity,\n                    type: 'attrValue',\n                    value: sel.name,\n                });\n                break;\n            case 'id':\n                newList.push({\n                    matcher: '=',\n                    modifier: null,\n                    name: 'id',\n                    namespace: null,\n                    specificity: sel.specificity,\n                    type: 'attrValue',\n                    value: sel.name,\n                });\n                break;\n            case 'combinator':\n                reduceSelectorVariants(sel.left);\n                newList.push(sel);\n                break;\n            case 'universal':\n                break;\n            default:\n                newList.push(sel);\n                break;\n        }\n    });\n    ast.list = newList;\n}\nfunction weave(items) {\n    const branches = [];\n    while (items.length) {\n        const topKind = findTopKey(items, (sel) => true, getSelectorKind);\n        const { matches, nonmatches, empty } = breakByKind(items, topKind);\n        items = nonmatches;\n        if (matches.length) {\n            branches.push(branchOfKind(topKind, matches));\n        }\n        if (empty.length) {\n            branches.push(...terminate(empty));\n        }\n    }\n    return branches;\n}\nfunction terminate(items) {\n    const results = [];\n    for (const item of items) {\n        const terminal = item.terminal;\n        if (terminal.type === 'terminal') {\n            results.push(terminal);\n        }\n        else {\n            const { matches, rest } = partition(terminal.cont, (node) => node.type === 'terminal');\n            matches.forEach((node) => results.push(node));\n            if (rest.length) {\n                terminal.cont = rest;\n                results.push(terminal);\n            }\n        }\n    }\n    return results;\n}\nfunction breakByKind(items, selectedKind) {\n    const matches = [];\n    const nonmatches = [];\n    const empty = [];\n    for (const item of items) {\n        const simpsels = item.ast.list;\n        if (simpsels.length) {\n            const isMatch = simpsels.some(node => getSelectorKind(node) === selectedKind);\n            (isMatch ? matches : nonmatches).push(item);\n        }\n        else {\n            empty.push(item);\n        }\n    }\n    return { matches, nonmatches, empty };\n}\nfunction getSelectorKind(sel) {\n    switch (sel.type) {\n        case 'attrPresence':\n            return `attrPresence ${sel.name}`;\n        case 'attrValue':\n            return `attrValue ${sel.name}`;\n        case 'combinator':\n            return `combinator ${sel.combinator}`;\n        default:\n            return sel.type;\n    }\n}\nfunction branchOfKind(kind, items) {\n    if (kind === 'tag') {\n        return tagNameBranch(items);\n    }\n    if (kind.startsWith('attrValue ')) {\n        return attrValueBranch(kind.substring(10), items);\n    }\n    if (kind.startsWith('attrPresence ')) {\n        return attrPresenceBranch(kind.substring(13), items);\n    }\n    if (kind === 'combinator >') {\n        return combinatorBranch('>', items);\n    }\n    if (kind === 'combinator +') {\n        return combinatorBranch('+', items);\n    }\n    throw new Error(`Unsupported selector kind: ${kind}`);\n}\nfunction tagNameBranch(items) {\n    const groups = spliceAndGroup(items, (x) => x.type === 'tag', (x) => x.name);\n    const variants = Object.entries(groups).map(([name, group]) => ({\n        type: 'variant',\n        value: name,\n        cont: weave(group.items)\n    }));\n    return {\n        type: 'tagName',\n        variants: variants\n    };\n}\nfunction attrPresenceBranch(name, items) {\n    for (const item of items) {\n        spliceSimpleSelector(item, (x) => (x.type === 'attrPresence') && (x.name === name));\n    }\n    return {\n        type: 'attrPresence',\n        name: name,\n        cont: weave(items)\n    };\n}\nfunction attrValueBranch(name, items) {\n    const groups = spliceAndGroup(items, (x) => (x.type === 'attrValue') && (x.name === name), (x) => `${x.matcher} ${x.modifier || ''} ${x.value}`);\n    const matchers = [];\n    for (const group of Object.values(groups)) {\n        const sel = group.oneSimpleSelector;\n        const predicate = getAttrPredicate(sel);\n        const continuation = weave(group.items);\n        matchers.push({\n            type: 'matcher',\n            matcher: sel.matcher,\n            modifier: sel.modifier,\n            value: sel.value,\n            predicate: predicate,\n            cont: continuation\n        });\n    }\n    return {\n        type: 'attrValue',\n        name: name,\n        matchers: matchers\n    };\n}\nfunction getAttrPredicate(sel) {\n    if (sel.modifier === 'i') {\n        const expected = sel.value.toLowerCase();\n        switch (sel.matcher) {\n            case '=':\n                return (actual) => expected === actual.toLowerCase();\n            case '~=':\n                return (actual) => actual.toLowerCase().split(/[ \\t]+/).includes(expected);\n            case '^=':\n                return (actual) => actual.toLowerCase().startsWith(expected);\n            case '$=':\n                return (actual) => actual.toLowerCase().endsWith(expected);\n            case '*=':\n                return (actual) => actual.toLowerCase().includes(expected);\n            case '|=':\n                return (actual) => {\n                    const lower = actual.toLowerCase();\n                    return (expected === lower) || (lower.startsWith(expected) && lower[expected.length] === '-');\n                };\n        }\n    }\n    else {\n        const expected = sel.value;\n        switch (sel.matcher) {\n            case '=':\n                return (actual) => expected === actual;\n            case '~=':\n                return (actual) => actual.split(/[ \\t]+/).includes(expected);\n            case '^=':\n                return (actual) => actual.startsWith(expected);\n            case '$=':\n                return (actual) => actual.endsWith(expected);\n            case '*=':\n                return (actual) => actual.includes(expected);\n            case '|=':\n                return (actual) => (expected === actual) || (actual.startsWith(expected) && actual[expected.length] === '-');\n        }\n    }\n}\nfunction combinatorBranch(combinator, items) {\n    const groups = spliceAndGroup(items, (x) => (x.type === 'combinator') && (x.combinator === combinator), (x) => parseley__WEBPACK_IMPORTED_MODULE_0__.serialize(x.left));\n    const leftItems = [];\n    for (const group of Object.values(groups)) {\n        const rightCont = weave(group.items);\n        const leftAst = group.oneSimpleSelector.left;\n        leftItems.push({\n            ast: leftAst,\n            terminal: { type: 'popElement', cont: rightCont }\n        });\n    }\n    return {\n        type: 'pushElement',\n        combinator: combinator,\n        cont: weave(leftItems)\n    };\n}\nfunction spliceAndGroup(items, predicate, keyCallback) {\n    const groups = {};\n    while (items.length) {\n        const bestKey = findTopKey(items, predicate, keyCallback);\n        const bestKeyPredicate = (sel) => predicate(sel) && keyCallback(sel) === bestKey;\n        const hasBestKeyPredicate = (item) => item.ast.list.some(bestKeyPredicate);\n        const { matches, rest } = partition1(items, hasBestKeyPredicate);\n        let oneSimpleSelector = null;\n        for (const item of matches) {\n            const splicedNode = spliceSimpleSelector(item, bestKeyPredicate);\n            if (!oneSimpleSelector) {\n                oneSimpleSelector = splicedNode;\n            }\n        }\n        if (oneSimpleSelector == null) {\n            throw new Error('No simple selector is found.');\n        }\n        groups[bestKey] = { oneSimpleSelector: oneSimpleSelector, items: matches };\n        items = rest;\n    }\n    return groups;\n}\nfunction spliceSimpleSelector(item, predicate) {\n    const simpsels = item.ast.list;\n    const matches = new Array(simpsels.length);\n    let firstIndex = -1;\n    for (let i = simpsels.length; i-- > 0;) {\n        if (predicate(simpsels[i])) {\n            matches[i] = true;\n            firstIndex = i;\n        }\n    }\n    if (firstIndex == -1) {\n        throw new Error(`Couldn't find the required simple selector.`);\n    }\n    const result = simpsels[firstIndex];\n    item.ast.list = simpsels.filter((sel, i) => !matches[i]);\n    return result;\n}\nfunction findTopKey(items, predicate, keyCallback) {\n    const candidates = {};\n    for (const item of items) {\n        const candidates1 = {};\n        for (const node of item.ast.list.filter(predicate)) {\n            candidates1[keyCallback(node)] = true;\n        }\n        for (const key of Object.keys(candidates1)) {\n            if (candidates[key]) {\n                candidates[key]++;\n            }\n            else {\n                candidates[key] = 1;\n            }\n        }\n    }\n    let topKind = '';\n    let topCounter = 0;\n    for (const entry of Object.entries(candidates)) {\n        if (entry[1] > topCounter) {\n            topKind = entry[0];\n            topCounter = entry[1];\n        }\n    }\n    return topKind;\n}\nfunction partition(src, predicate) {\n    const matches = [];\n    const rest = [];\n    for (const x of src) {\n        if (predicate(x)) {\n            matches.push(x);\n        }\n        else {\n            rest.push(x);\n        }\n    }\n    return { matches, rest };\n}\nfunction partition1(src, predicate) {\n    const matches = [];\n    const rest = [];\n    for (const x of src) {\n        if (predicate(x)) {\n            matches.push(x);\n        }\n        else {\n            rest.push(x);\n        }\n    }\n    return { matches, rest };\n}\n\nclass Picker {\n    constructor(f) {\n        this.f = f;\n    }\n    pickAll(el) {\n        return this.f(el);\n    }\n    pick1(el, preferFirst = false) {\n        const results = this.f(el);\n        const len = results.length;\n        if (len === 0) {\n            return null;\n        }\n        if (len === 1) {\n            return results[0].value;\n        }\n        const comparator = (preferFirst)\n            ? comparatorPreferFirst\n            : comparatorPreferLast;\n        let result = results[0];\n        for (let i = 1; i < len; i++) {\n            const next = results[i];\n            if (comparator(result, next)) {\n                result = next;\n            }\n        }\n        return result.value;\n    }\n}\nfunction comparatorPreferFirst(acc, next) {\n    const diff = (0,parseley__WEBPACK_IMPORTED_MODULE_0__.compareSpecificity)(next.specificity, acc.specificity);\n    return diff > 0 || (diff === 0 && next.index < acc.index);\n}\nfunction comparatorPreferLast(acc, next) {\n    const diff = (0,parseley__WEBPACK_IMPORTED_MODULE_0__.compareSpecificity)(next.specificity, acc.specificity);\n    return diff > 0 || (diff === 0 && next.index > acc.index);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc2VsZGVyZWUvbGliL3NlbGRlcmVlLm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBcUM7QUFDUzs7QUFFOUM7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixZQUFZLEVBQUUsa0NBQWtDLEVBQUUsV0FBVztBQUN0RjtBQUNBO0FBQ0Esa0NBQWtDLHlDQUF5QztBQUMzRTtBQUNBLG9DQUFvQyxVQUFVLElBQUkseUNBQXlDO0FBQzNGO0FBQ0EsdUNBQXVDLFVBQVUsSUFBSSx3QkFBd0I7QUFDN0U7QUFDQSxzQ0FBc0MsZ0JBQWdCLElBQUksbUNBQW1DO0FBQzdGO0FBQ0EscUNBQXFDLG1DQUFtQztBQUN4RTtBQUNBLDBCQUEwQixXQUFXLElBQUksd0JBQXdCO0FBQ2pFO0FBQ0Esd0JBQXdCLGNBQWMsR0FBRyxXQUFXLEdBQUcsb0JBQW9CLElBQUksd0JBQXdCO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFFBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0EsK0JBQStCLDRDQUFlO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrQ0FBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNERBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw0REFBa0I7QUFDbkM7QUFDQTs7QUFFdUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yaXRodmlrcmVkZHkxMC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc2VsZGVyZWUvbGliL3NlbGRlcmVlLm1qcz80ZWJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBhcnNlbGV5IGZyb20gJ3BhcnNlbGV5JztcbmltcG9ydCB7IGNvbXBhcmVTcGVjaWZpY2l0eSB9IGZyb20gJ3BhcnNlbGV5JztcblxudmFyIEFzdCA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICBfX3Byb3RvX186IG51bGxcbn0pO1xuXG52YXIgVHlwZXMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsXG59KTtcblxuY29uc3QgdHJlZWlmeSA9IChub2RlcykgPT4gJ+KWvVxcbicgKyB0cmVlaWZ5QXJyYXkobm9kZXMsIHRoaW5MaW5lcyk7XG5jb25zdCB0aGluTGluZXMgPSBbWyfilJzilIAnLCAn4pSCICddLCBbJ+KUlOKUgCcsICcgICddXTtcbmNvbnN0IGhlYXZ5TGluZXMgPSBbWyfilKDilIAnLCAn4pSDICddLCBbJ+KUluKUgCcsICcgICddXTtcbmNvbnN0IGRvdWJsZUxpbmVzID0gW1sn4pWf4pSAJywgJ+KVkSAnXSwgWyfilZnilIAnLCAnICAnXV07XG5mdW5jdGlvbiB0cmVlaWZ5QXJyYXkobm9kZXMsIHRwbCA9IGhlYXZ5TGluZXMpIHtcbiAgICByZXR1cm4gcHJlZml4SXRlbXModHBsLCBub2Rlcy5tYXAobiA9PiB0cmVlaWZ5Tm9kZShuKSkpO1xufVxuZnVuY3Rpb24gdHJlZWlmeU5vZGUobm9kZSkge1xuICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3Rlcm1pbmFsJzoge1xuICAgICAgICAgICAgY29uc3QgdmN0ciA9IG5vZGUudmFsdWVDb250YWluZXI7XG4gICAgICAgICAgICByZXR1cm4gYOKXgSAjJHt2Y3RyLmluZGV4fSAke0pTT04uc3RyaW5naWZ5KHZjdHIuc3BlY2lmaWNpdHkpfSAke3ZjdHIudmFsdWV9YDtcbiAgICAgICAgfVxuICAgICAgICBjYXNlICd0YWdOYW1lJzpcbiAgICAgICAgICAgIHJldHVybiBg4pe7IFRhZyBuYW1lXFxuJHt0cmVlaWZ5QXJyYXkobm9kZS52YXJpYW50cywgZG91YmxlTGluZXMpfWA7XG4gICAgICAgIGNhc2UgJ2F0dHJWYWx1ZSc6XG4gICAgICAgICAgICByZXR1cm4gYOKWoyBBdHRyIHZhbHVlOiAke25vZGUubmFtZX1cXG4ke3RyZWVpZnlBcnJheShub2RlLm1hdGNoZXJzLCBkb3VibGVMaW5lcyl9YDtcbiAgICAgICAgY2FzZSAnYXR0clByZXNlbmNlJzpcbiAgICAgICAgICAgIHJldHVybiBg4peoIEF0dHIgcHJlc2VuY2U6ICR7bm9kZS5uYW1lfVxcbiR7dHJlZWlmeUFycmF5KG5vZGUuY29udCl9YDtcbiAgICAgICAgY2FzZSAncHVzaEVsZW1lbnQnOlxuICAgICAgICAgICAgcmV0dXJuIGDil4kgUHVzaCBlbGVtZW50OiAke25vZGUuY29tYmluYXRvcn1cXG4ke3RyZWVpZnlBcnJheShub2RlLmNvbnQsIHRoaW5MaW5lcyl9YDtcbiAgICAgICAgY2FzZSAncG9wRWxlbWVudCc6XG4gICAgICAgICAgICByZXR1cm4gYOKXjCBQb3AgZWxlbWVudFxcbiR7dHJlZWlmeUFycmF5KG5vZGUuY29udCwgdGhpbkxpbmVzKX1gO1xuICAgICAgICBjYXNlICd2YXJpYW50JzpcbiAgICAgICAgICAgIHJldHVybiBg4peHID0gJHtub2RlLnZhbHVlfVxcbiR7dHJlZWlmeUFycmF5KG5vZGUuY29udCl9YDtcbiAgICAgICAgY2FzZSAnbWF0Y2hlcic6XG4gICAgICAgICAgICByZXR1cm4gYOKXiCAke25vZGUubWF0Y2hlcn0gXCIke25vZGUudmFsdWV9XCIke25vZGUubW9kaWZpZXIgfHwgJyd9XFxuJHt0cmVlaWZ5QXJyYXkobm9kZS5jb250KX1gO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHByZWZpeEl0ZW1zKHRwbCwgaXRlbXMpIHtcbiAgICByZXR1cm4gaXRlbXNcbiAgICAgICAgLm1hcCgoaXRlbSwgaSwgeyBsZW5ndGggfSkgPT4gcHJlZml4SXRlbSh0cGwsIGl0ZW0sIGkgPT09IGxlbmd0aCAtIDEpKVxuICAgICAgICAuam9pbignXFxuJyk7XG59XG5mdW5jdGlvbiBwcmVmaXhJdGVtKHRwbCwgaXRlbSwgdGFpbCA9IHRydWUpIHtcbiAgICBjb25zdCB0cGwxID0gdHBsW3RhaWwgPyAxIDogMF07XG4gICAgcmV0dXJuIHRwbDFbMF0gKyBpdGVtLnNwbGl0KCdcXG4nKS5qb2luKCdcXG4nICsgdHBsMVsxXSk7XG59XG5cbnZhciBUcmVlaWZ5QnVpbGRlciA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgdHJlZWlmeTogdHJlZWlmeVxufSk7XG5cbmNsYXNzIERlY2lzaW9uVHJlZSB7XG4gICAgY29uc3RydWN0b3IoaW5wdXQpIHtcbiAgICAgICAgdGhpcy5icmFuY2hlcyA9IHdlYXZlKHRvQXN0VGVybWluYWxQYWlycyhpbnB1dCkpO1xuICAgIH1cbiAgICBidWlsZChidWlsZGVyKSB7XG4gICAgICAgIHJldHVybiBidWlsZGVyKHRoaXMuYnJhbmNoZXMpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRvQXN0VGVybWluYWxQYWlycyhhcnJheSkge1xuICAgIGNvbnN0IGxlbiA9IGFycmF5Lmxlbmd0aDtcbiAgICBjb25zdCByZXN1bHRzID0gbmV3IEFycmF5KGxlbik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBbc2VsZWN0b3JTdHJpbmcsIHZhbF0gPSBhcnJheVtpXTtcbiAgICAgICAgY29uc3QgYXN0ID0gcHJlcHJvY2VzcyhwYXJzZWxleS5wYXJzZTEoc2VsZWN0b3JTdHJpbmcpKTtcbiAgICAgICAgcmVzdWx0c1tpXSA9IHtcbiAgICAgICAgICAgIGFzdDogYXN0LFxuICAgICAgICAgICAgdGVybWluYWw6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndGVybWluYWwnLFxuICAgICAgICAgICAgICAgIHZhbHVlQ29udGFpbmVyOiB7IGluZGV4OiBpLCB2YWx1ZTogdmFsLCBzcGVjaWZpY2l0eTogYXN0LnNwZWNpZmljaXR5IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG59XG5mdW5jdGlvbiBwcmVwcm9jZXNzKGFzdCkge1xuICAgIHJlZHVjZVNlbGVjdG9yVmFyaWFudHMoYXN0KTtcbiAgICBwYXJzZWxleS5ub3JtYWxpemUoYXN0KTtcbiAgICByZXR1cm4gYXN0O1xufVxuZnVuY3Rpb24gcmVkdWNlU2VsZWN0b3JWYXJpYW50cyhhc3QpIHtcbiAgICBjb25zdCBuZXdMaXN0ID0gW107XG4gICAgYXN0Lmxpc3QuZm9yRWFjaChzZWwgPT4ge1xuICAgICAgICBzd2l0Y2ggKHNlbC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdjbGFzcyc6XG4gICAgICAgICAgICAgICAgbmV3TGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcjogJ349JyxcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGFzcycsXG4gICAgICAgICAgICAgICAgICAgIG5hbWVzcGFjZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgc3BlY2lmaWNpdHk6IHNlbC5zcGVjaWZpY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2F0dHJWYWx1ZScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWwubmFtZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2lkJzpcbiAgICAgICAgICAgICAgICBuZXdMaXN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBtYXRjaGVyOiAnPScsXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHNwZWNpZmljaXR5OiBzZWwuc3BlY2lmaWNpdHksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhdHRyVmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsLm5hbWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjb21iaW5hdG9yJzpcbiAgICAgICAgICAgICAgICByZWR1Y2VTZWxlY3RvclZhcmlhbnRzKHNlbC5sZWZ0KTtcbiAgICAgICAgICAgICAgICBuZXdMaXN0LnB1c2goc2VsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3VuaXZlcnNhbCc6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIG5ld0xpc3QucHVzaChzZWwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgYXN0Lmxpc3QgPSBuZXdMaXN0O1xufVxuZnVuY3Rpb24gd2VhdmUoaXRlbXMpIHtcbiAgICBjb25zdCBicmFuY2hlcyA9IFtdO1xuICAgIHdoaWxlIChpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgdG9wS2luZCA9IGZpbmRUb3BLZXkoaXRlbXMsIChzZWwpID0+IHRydWUsIGdldFNlbGVjdG9yS2luZCk7XG4gICAgICAgIGNvbnN0IHsgbWF0Y2hlcywgbm9ubWF0Y2hlcywgZW1wdHkgfSA9IGJyZWFrQnlLaW5kKGl0ZW1zLCB0b3BLaW5kKTtcbiAgICAgICAgaXRlbXMgPSBub25tYXRjaGVzO1xuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGJyYW5jaGVzLnB1c2goYnJhbmNoT2ZLaW5kKHRvcEtpbmQsIG1hdGNoZXMpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW1wdHkubGVuZ3RoKSB7XG4gICAgICAgICAgICBicmFuY2hlcy5wdXNoKC4uLnRlcm1pbmF0ZShlbXB0eSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBicmFuY2hlcztcbn1cbmZ1bmN0aW9uIHRlcm1pbmF0ZShpdGVtcykge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWwgPSBpdGVtLnRlcm1pbmFsO1xuICAgICAgICBpZiAodGVybWluYWwudHlwZSA9PT0gJ3Rlcm1pbmFsJykge1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRlcm1pbmFsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHsgbWF0Y2hlcywgcmVzdCB9ID0gcGFydGl0aW9uKHRlcm1pbmFsLmNvbnQsIChub2RlKSA9PiBub2RlLnR5cGUgPT09ICd0ZXJtaW5hbCcpO1xuICAgICAgICAgICAgbWF0Y2hlcy5mb3JFYWNoKChub2RlKSA9PiByZXN1bHRzLnB1c2gobm9kZSkpO1xuICAgICAgICAgICAgaWYgKHJlc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGVybWluYWwuY29udCA9IHJlc3Q7XG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRlcm1pbmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbn1cbmZ1bmN0aW9uIGJyZWFrQnlLaW5kKGl0ZW1zLCBzZWxlY3RlZEtpbmQpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gW107XG4gICAgY29uc3Qgbm9ubWF0Y2hlcyA9IFtdO1xuICAgIGNvbnN0IGVtcHR5ID0gW107XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGNvbnN0IHNpbXBzZWxzID0gaXRlbS5hc3QubGlzdDtcbiAgICAgICAgaWYgKHNpbXBzZWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgaXNNYXRjaCA9IHNpbXBzZWxzLnNvbWUobm9kZSA9PiBnZXRTZWxlY3RvcktpbmQobm9kZSkgPT09IHNlbGVjdGVkS2luZCk7XG4gICAgICAgICAgICAoaXNNYXRjaCA/IG1hdGNoZXMgOiBub25tYXRjaGVzKS5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZW1wdHkucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBtYXRjaGVzLCBub25tYXRjaGVzLCBlbXB0eSB9O1xufVxuZnVuY3Rpb24gZ2V0U2VsZWN0b3JLaW5kKHNlbCkge1xuICAgIHN3aXRjaCAoc2VsLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXR0clByZXNlbmNlJzpcbiAgICAgICAgICAgIHJldHVybiBgYXR0clByZXNlbmNlICR7c2VsLm5hbWV9YDtcbiAgICAgICAgY2FzZSAnYXR0clZhbHVlJzpcbiAgICAgICAgICAgIHJldHVybiBgYXR0clZhbHVlICR7c2VsLm5hbWV9YDtcbiAgICAgICAgY2FzZSAnY29tYmluYXRvcic6XG4gICAgICAgICAgICByZXR1cm4gYGNvbWJpbmF0b3IgJHtzZWwuY29tYmluYXRvcn1gO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHNlbC50eXBlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGJyYW5jaE9mS2luZChraW5kLCBpdGVtcykge1xuICAgIGlmIChraW5kID09PSAndGFnJykge1xuICAgICAgICByZXR1cm4gdGFnTmFtZUJyYW5jaChpdGVtcyk7XG4gICAgfVxuICAgIGlmIChraW5kLnN0YXJ0c1dpdGgoJ2F0dHJWYWx1ZSAnKSkge1xuICAgICAgICByZXR1cm4gYXR0clZhbHVlQnJhbmNoKGtpbmQuc3Vic3RyaW5nKDEwKSwgaXRlbXMpO1xuICAgIH1cbiAgICBpZiAoa2luZC5zdGFydHNXaXRoKCdhdHRyUHJlc2VuY2UgJykpIHtcbiAgICAgICAgcmV0dXJuIGF0dHJQcmVzZW5jZUJyYW5jaChraW5kLnN1YnN0cmluZygxMyksIGl0ZW1zKTtcbiAgICB9XG4gICAgaWYgKGtpbmQgPT09ICdjb21iaW5hdG9yID4nKSB7XG4gICAgICAgIHJldHVybiBjb21iaW5hdG9yQnJhbmNoKCc+JywgaXRlbXMpO1xuICAgIH1cbiAgICBpZiAoa2luZCA9PT0gJ2NvbWJpbmF0b3IgKycpIHtcbiAgICAgICAgcmV0dXJuIGNvbWJpbmF0b3JCcmFuY2goJysnLCBpdGVtcyk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgc2VsZWN0b3Iga2luZDogJHtraW5kfWApO1xufVxuZnVuY3Rpb24gdGFnTmFtZUJyYW5jaChpdGVtcykge1xuICAgIGNvbnN0IGdyb3VwcyA9IHNwbGljZUFuZEdyb3VwKGl0ZW1zLCAoeCkgPT4geC50eXBlID09PSAndGFnJywgKHgpID0+IHgubmFtZSk7XG4gICAgY29uc3QgdmFyaWFudHMgPSBPYmplY3QuZW50cmllcyhncm91cHMpLm1hcCgoW25hbWUsIGdyb3VwXSkgPT4gKHtcbiAgICAgICAgdHlwZTogJ3ZhcmlhbnQnLFxuICAgICAgICB2YWx1ZTogbmFtZSxcbiAgICAgICAgY29udDogd2VhdmUoZ3JvdXAuaXRlbXMpXG4gICAgfSkpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICd0YWdOYW1lJyxcbiAgICAgICAgdmFyaWFudHM6IHZhcmlhbnRzXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGF0dHJQcmVzZW5jZUJyYW5jaChuYW1lLCBpdGVtcykge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBzcGxpY2VTaW1wbGVTZWxlY3RvcihpdGVtLCAoeCkgPT4gKHgudHlwZSA9PT0gJ2F0dHJQcmVzZW5jZScpICYmICh4Lm5hbWUgPT09IG5hbWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ2F0dHJQcmVzZW5jZScsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGNvbnQ6IHdlYXZlKGl0ZW1zKVxuICAgIH07XG59XG5mdW5jdGlvbiBhdHRyVmFsdWVCcmFuY2gobmFtZSwgaXRlbXMpIHtcbiAgICBjb25zdCBncm91cHMgPSBzcGxpY2VBbmRHcm91cChpdGVtcywgKHgpID0+ICh4LnR5cGUgPT09ICdhdHRyVmFsdWUnKSAmJiAoeC5uYW1lID09PSBuYW1lKSwgKHgpID0+IGAke3gubWF0Y2hlcn0gJHt4Lm1vZGlmaWVyIHx8ICcnfSAke3gudmFsdWV9YCk7XG4gICAgY29uc3QgbWF0Y2hlcnMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIE9iamVjdC52YWx1ZXMoZ3JvdXBzKSkge1xuICAgICAgICBjb25zdCBzZWwgPSBncm91cC5vbmVTaW1wbGVTZWxlY3RvcjtcbiAgICAgICAgY29uc3QgcHJlZGljYXRlID0gZ2V0QXR0clByZWRpY2F0ZShzZWwpO1xuICAgICAgICBjb25zdCBjb250aW51YXRpb24gPSB3ZWF2ZShncm91cC5pdGVtcyk7XG4gICAgICAgIG1hdGNoZXJzLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ21hdGNoZXInLFxuICAgICAgICAgICAgbWF0Y2hlcjogc2VsLm1hdGNoZXIsXG4gICAgICAgICAgICBtb2RpZmllcjogc2VsLm1vZGlmaWVyLFxuICAgICAgICAgICAgdmFsdWU6IHNlbC52YWx1ZSxcbiAgICAgICAgICAgIHByZWRpY2F0ZTogcHJlZGljYXRlLFxuICAgICAgICAgICAgY29udDogY29udGludWF0aW9uXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnYXR0clZhbHVlJyxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgbWF0Y2hlcnM6IG1hdGNoZXJzXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldEF0dHJQcmVkaWNhdGUoc2VsKSB7XG4gICAgaWYgKHNlbC5tb2RpZmllciA9PT0gJ2knKSB7XG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0gc2VsLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHN3aXRjaCAoc2VsLm1hdGNoZXIpIHtcbiAgICAgICAgICAgIGNhc2UgJz0nOlxuICAgICAgICAgICAgICAgIHJldHVybiAoYWN0dWFsKSA9PiBleHBlY3RlZCA9PT0gYWN0dWFsLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBjYXNlICd+PSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChhY3R1YWwpID0+IGFjdHVhbC50b0xvd2VyQ2FzZSgpLnNwbGl0KC9bIFxcdF0rLykuaW5jbHVkZXMoZXhwZWN0ZWQpO1xuICAgICAgICAgICAgY2FzZSAnXj0nOlxuICAgICAgICAgICAgICAgIHJldHVybiAoYWN0dWFsKSA9PiBhY3R1YWwudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKGV4cGVjdGVkKTtcbiAgICAgICAgICAgIGNhc2UgJyQ9JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gKGFjdHVhbCkgPT4gYWN0dWFsLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoZXhwZWN0ZWQpO1xuICAgICAgICAgICAgY2FzZSAnKj0nOlxuICAgICAgICAgICAgICAgIHJldHVybiAoYWN0dWFsKSA9PiBhY3R1YWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhleHBlY3RlZCk7XG4gICAgICAgICAgICBjYXNlICd8PSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChhY3R1YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG93ZXIgPSBhY3R1YWwudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChleHBlY3RlZCA9PT0gbG93ZXIpIHx8IChsb3dlci5zdGFydHNXaXRoKGV4cGVjdGVkKSAmJiBsb3dlcltleHBlY3RlZC5sZW5ndGhdID09PSAnLScpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0gc2VsLnZhbHVlO1xuICAgICAgICBzd2l0Y2ggKHNlbC5tYXRjaGVyKSB7XG4gICAgICAgICAgICBjYXNlICc9JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gKGFjdHVhbCkgPT4gZXhwZWN0ZWQgPT09IGFjdHVhbDtcbiAgICAgICAgICAgIGNhc2UgJ349JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gKGFjdHVhbCkgPT4gYWN0dWFsLnNwbGl0KC9bIFxcdF0rLykuaW5jbHVkZXMoZXhwZWN0ZWQpO1xuICAgICAgICAgICAgY2FzZSAnXj0nOlxuICAgICAgICAgICAgICAgIHJldHVybiAoYWN0dWFsKSA9PiBhY3R1YWwuc3RhcnRzV2l0aChleHBlY3RlZCk7XG4gICAgICAgICAgICBjYXNlICckPSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChhY3R1YWwpID0+IGFjdHVhbC5lbmRzV2l0aChleHBlY3RlZCk7XG4gICAgICAgICAgICBjYXNlICcqPSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChhY3R1YWwpID0+IGFjdHVhbC5pbmNsdWRlcyhleHBlY3RlZCk7XG4gICAgICAgICAgICBjYXNlICd8PSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChhY3R1YWwpID0+IChleHBlY3RlZCA9PT0gYWN0dWFsKSB8fCAoYWN0dWFsLnN0YXJ0c1dpdGgoZXhwZWN0ZWQpICYmIGFjdHVhbFtleHBlY3RlZC5sZW5ndGhdID09PSAnLScpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gY29tYmluYXRvckJyYW5jaChjb21iaW5hdG9yLCBpdGVtcykge1xuICAgIGNvbnN0IGdyb3VwcyA9IHNwbGljZUFuZEdyb3VwKGl0ZW1zLCAoeCkgPT4gKHgudHlwZSA9PT0gJ2NvbWJpbmF0b3InKSAmJiAoeC5jb21iaW5hdG9yID09PSBjb21iaW5hdG9yKSwgKHgpID0+IHBhcnNlbGV5LnNlcmlhbGl6ZSh4LmxlZnQpKTtcbiAgICBjb25zdCBsZWZ0SXRlbXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIE9iamVjdC52YWx1ZXMoZ3JvdXBzKSkge1xuICAgICAgICBjb25zdCByaWdodENvbnQgPSB3ZWF2ZShncm91cC5pdGVtcyk7XG4gICAgICAgIGNvbnN0IGxlZnRBc3QgPSBncm91cC5vbmVTaW1wbGVTZWxlY3Rvci5sZWZ0O1xuICAgICAgICBsZWZ0SXRlbXMucHVzaCh7XG4gICAgICAgICAgICBhc3Q6IGxlZnRBc3QsXG4gICAgICAgICAgICB0ZXJtaW5hbDogeyB0eXBlOiAncG9wRWxlbWVudCcsIGNvbnQ6IHJpZ2h0Q29udCB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAncHVzaEVsZW1lbnQnLFxuICAgICAgICBjb21iaW5hdG9yOiBjb21iaW5hdG9yLFxuICAgICAgICBjb250OiB3ZWF2ZShsZWZ0SXRlbXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNwbGljZUFuZEdyb3VwKGl0ZW1zLCBwcmVkaWNhdGUsIGtleUNhbGxiYWNrKSB7XG4gICAgY29uc3QgZ3JvdXBzID0ge307XG4gICAgd2hpbGUgKGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBiZXN0S2V5ID0gZmluZFRvcEtleShpdGVtcywgcHJlZGljYXRlLCBrZXlDYWxsYmFjayk7XG4gICAgICAgIGNvbnN0IGJlc3RLZXlQcmVkaWNhdGUgPSAoc2VsKSA9PiBwcmVkaWNhdGUoc2VsKSAmJiBrZXlDYWxsYmFjayhzZWwpID09PSBiZXN0S2V5O1xuICAgICAgICBjb25zdCBoYXNCZXN0S2V5UHJlZGljYXRlID0gKGl0ZW0pID0+IGl0ZW0uYXN0Lmxpc3Quc29tZShiZXN0S2V5UHJlZGljYXRlKTtcbiAgICAgICAgY29uc3QgeyBtYXRjaGVzLCByZXN0IH0gPSBwYXJ0aXRpb24xKGl0ZW1zLCBoYXNCZXN0S2V5UHJlZGljYXRlKTtcbiAgICAgICAgbGV0IG9uZVNpbXBsZVNlbGVjdG9yID0gbnVsbDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIG1hdGNoZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwbGljZWROb2RlID0gc3BsaWNlU2ltcGxlU2VsZWN0b3IoaXRlbSwgYmVzdEtleVByZWRpY2F0ZSk7XG4gICAgICAgICAgICBpZiAoIW9uZVNpbXBsZVNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgb25lU2ltcGxlU2VsZWN0b3IgPSBzcGxpY2VkTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAob25lU2ltcGxlU2VsZWN0b3IgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBzaW1wbGUgc2VsZWN0b3IgaXMgZm91bmQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZ3JvdXBzW2Jlc3RLZXldID0geyBvbmVTaW1wbGVTZWxlY3Rvcjogb25lU2ltcGxlU2VsZWN0b3IsIGl0ZW1zOiBtYXRjaGVzIH07XG4gICAgICAgIGl0ZW1zID0gcmVzdDtcbiAgICB9XG4gICAgcmV0dXJuIGdyb3Vwcztcbn1cbmZ1bmN0aW9uIHNwbGljZVNpbXBsZVNlbGVjdG9yKGl0ZW0sIHByZWRpY2F0ZSkge1xuICAgIGNvbnN0IHNpbXBzZWxzID0gaXRlbS5hc3QubGlzdDtcbiAgICBjb25zdCBtYXRjaGVzID0gbmV3IEFycmF5KHNpbXBzZWxzLmxlbmd0aCk7XG4gICAgbGV0IGZpcnN0SW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCBpID0gc2ltcHNlbHMubGVuZ3RoOyBpLS0gPiAwOykge1xuICAgICAgICBpZiAocHJlZGljYXRlKHNpbXBzZWxzW2ldKSkge1xuICAgICAgICAgICAgbWF0Y2hlc1tpXSA9IHRydWU7XG4gICAgICAgICAgICBmaXJzdEluZGV4ID0gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZmlyc3RJbmRleCA9PSAtMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkbid0IGZpbmQgdGhlIHJlcXVpcmVkIHNpbXBsZSBzZWxlY3Rvci5gKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gc2ltcHNlbHNbZmlyc3RJbmRleF07XG4gICAgaXRlbS5hc3QubGlzdCA9IHNpbXBzZWxzLmZpbHRlcigoc2VsLCBpKSA9PiAhbWF0Y2hlc1tpXSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGZpbmRUb3BLZXkoaXRlbXMsIHByZWRpY2F0ZSwga2V5Q2FsbGJhY2spIHtcbiAgICBjb25zdCBjYW5kaWRhdGVzID0ge307XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZXMxID0ge307XG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBpdGVtLmFzdC5saXN0LmZpbHRlcihwcmVkaWNhdGUpKSB7XG4gICAgICAgICAgICBjYW5kaWRhdGVzMVtrZXlDYWxsYmFjayhub2RlKV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGNhbmRpZGF0ZXMxKSkge1xuICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZXNba2V5XSkge1xuICAgICAgICAgICAgICAgIGNhbmRpZGF0ZXNba2V5XSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FuZGlkYXRlc1trZXldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgdG9wS2luZCA9ICcnO1xuICAgIGxldCB0b3BDb3VudGVyID0gMDtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIE9iamVjdC5lbnRyaWVzKGNhbmRpZGF0ZXMpKSB7XG4gICAgICAgIGlmIChlbnRyeVsxXSA+IHRvcENvdW50ZXIpIHtcbiAgICAgICAgICAgIHRvcEtpbmQgPSBlbnRyeVswXTtcbiAgICAgICAgICAgIHRvcENvdW50ZXIgPSBlbnRyeVsxXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG9wS2luZDtcbn1cbmZ1bmN0aW9uIHBhcnRpdGlvbihzcmMsIHByZWRpY2F0ZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBbXTtcbiAgICBjb25zdCByZXN0ID0gW107XG4gICAgZm9yIChjb25zdCB4IG9mIHNyYykge1xuICAgICAgICBpZiAocHJlZGljYXRlKHgpKSB7XG4gICAgICAgICAgICBtYXRjaGVzLnB1c2goeCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN0LnB1c2goeCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgbWF0Y2hlcywgcmVzdCB9O1xufVxuZnVuY3Rpb24gcGFydGl0aW9uMShzcmMsIHByZWRpY2F0ZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBbXTtcbiAgICBjb25zdCByZXN0ID0gW107XG4gICAgZm9yIChjb25zdCB4IG9mIHNyYykge1xuICAgICAgICBpZiAocHJlZGljYXRlKHgpKSB7XG4gICAgICAgICAgICBtYXRjaGVzLnB1c2goeCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN0LnB1c2goeCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgbWF0Y2hlcywgcmVzdCB9O1xufVxuXG5jbGFzcyBQaWNrZXIge1xuICAgIGNvbnN0cnVjdG9yKGYpIHtcbiAgICAgICAgdGhpcy5mID0gZjtcbiAgICB9XG4gICAgcGlja0FsbChlbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mKGVsKTtcbiAgICB9XG4gICAgcGljazEoZWwsIHByZWZlckZpcnN0ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IHRoaXMuZihlbCk7XG4gICAgICAgIGNvbnN0IGxlbiA9IHJlc3VsdHMubGVuZ3RoO1xuICAgICAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVuID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0c1swXS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wYXJhdG9yID0gKHByZWZlckZpcnN0KVxuICAgICAgICAgICAgPyBjb21wYXJhdG9yUHJlZmVyRmlyc3RcbiAgICAgICAgICAgIDogY29tcGFyYXRvclByZWZlckxhc3Q7XG4gICAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzWzBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0ID0gcmVzdWx0c1tpXTtcbiAgICAgICAgICAgIGlmIChjb21wYXJhdG9yKHJlc3VsdCwgbmV4dCkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQudmFsdWU7XG4gICAgfVxufVxuZnVuY3Rpb24gY29tcGFyYXRvclByZWZlckZpcnN0KGFjYywgbmV4dCkge1xuICAgIGNvbnN0IGRpZmYgPSBjb21wYXJlU3BlY2lmaWNpdHkobmV4dC5zcGVjaWZpY2l0eSwgYWNjLnNwZWNpZmljaXR5KTtcbiAgICByZXR1cm4gZGlmZiA+IDAgfHwgKGRpZmYgPT09IDAgJiYgbmV4dC5pbmRleCA8IGFjYy5pbmRleCk7XG59XG5mdW5jdGlvbiBjb21wYXJhdG9yUHJlZmVyTGFzdChhY2MsIG5leHQpIHtcbiAgICBjb25zdCBkaWZmID0gY29tcGFyZVNwZWNpZmljaXR5KG5leHQuc3BlY2lmaWNpdHksIGFjYy5zcGVjaWZpY2l0eSk7XG4gICAgcmV0dXJuIGRpZmYgPiAwIHx8IChkaWZmID09PSAwICYmIG5leHQuaW5kZXggPiBhY2MuaW5kZXgpO1xufVxuXG5leHBvcnQgeyBBc3QsIERlY2lzaW9uVHJlZSwgUGlja2VyLCBUcmVlaWZ5QnVpbGRlciBhcyBUcmVlaWZ5LCBUeXBlcyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/selderee/lib/selderee.mjs\n");

/***/ })

};
;