import {
    // Radio,
    // RadioGroup,
    // RadioButton,
    // Tabs,
    // TabPane,
    Row,
    Col,
    // Input,
    // Button,
    // Table,
    // TableColumn,
    // Tooltip,
    // Form,
    // FormItem,
    // Tree,
    // Select,
    // Option,
    // Pagination,
    // Dropdown,
    // DropdownMenu,
    // DropdownItem,
    // Dialog,
    // Upload,
    // Aside,
    // DatePicker,
    // Card,
    // Checkbox,
    // CheckboxButton,
    // CheckboxGroup,
    // Switch,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    // InfiniteScroll,
    // loading,
    // Notification
} from 'element-ui';

const element = {
    install: function (Vue) {
        // Vue.component(Radio.name, Radio);
        // Vue.component(RadioGroup.name, RadioGroup);
        // Vue.component(RadioButton.name, RadioButton);
        // Vue.component(Tabs.name, Tabs);
        // Vue.component(TabPane.name, TabPane);
        Vue.component(Row.name, Row);
        Vue.component(Col.name, Col);
        // Vue.component(Input.name, Input);
        // Vue.component(Button.name, Button);
        // Vue.component(Table.name, Table);
        // Vue.component(TableColumn.name, TableColumn);
        // Vue.component(Tooltip.name, Tooltip);
        // Vue.component(Form.name, Form);
        // Vue.component(Tree.name, Tree);
        // Vue.component(FormItem.name, FormItem);
        // Vue.component(Select.name, Select);
        // Vue.component(Option.name, Option);
        // Vue.component(Pagination.name, Pagination);
        // Vue.component(Dropdown.name, Dropdown);
        // Vue.component(DropdownMenu.name, DropdownMenu);
        // Vue.component(DropdownItem.name, DropdownItem);
        // Vue.component(Dialog.name, Dialog);
        // Vue.component(Upload.name, Upload);
        // Vue.component(Aside.name, Aside);
        // Vue.component(DatePicker.name, DatePicker);
        // Vue.component(Card.name, Card);
        // Vue.component(Checkbox.name, Checkbox);
        // Vue.component(CheckboxButton.name, CheckboxButton);
        // Vue.component(CheckboxGroup.name, CheckboxGroup);
        // Vue.component(Switch.name, Switch);
        Vue.use(Menu);
        Vue.use(Submenu);
        Vue.use(MenuItem);
        Vue.use(MenuItemGroup);
        // Vue.use(InfiniteScroll);
        // Vue.use(loading);

        Vue.prototype.$notify = Notification;
    }
};
export default element;
