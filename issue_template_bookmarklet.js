javascript: 
(() => {
        const templates = {
                Bug: `Description of Bug
URL
Environment (OS/Browser)
Steps to replicate
Videos/Screenshots
Console log`,
                Story: `Goal of Feature
User Story or Business Case
Key Features
Links to examples or mockups`
        };

        const issueType = document.evaluate('//*[@id="issue-create.ui.modal.create-form.type-picker.issue-type-select"]/div/div[1]/div[1]/div/div[2]/div', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerText;

        if (issueType in templates) {
                const descriptionBox = document.evaluate('//*[@id="ak-editor-textarea"]/p', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                descriptionBox.innerText = templates[issueType];
        }
})();
