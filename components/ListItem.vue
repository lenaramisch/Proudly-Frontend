<script>
    import {
    FwbTableCell,
    FwbTableRow,
    FwbButton
} from 'flowbite-vue'

export default {
    name: 'TodoListItem',
    props: {
        newTodoTitle: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <fwb-table-row>
        <fwb-table-cell>{{ newTodoTitle }}</fwb-table-cell>
            <fwb-table-cell>
                <fwb-button class="p-2 m-1" color="yellow" outline><img src="../assets/icons/pen.svg" class="h-4"></fwb-button>
                <fwb-button class="p-2 m-1" color="red" outline><img src="../assets/icons/bin.svg" class="h-4"></fwb-button>
                <fwb-button class="p-2 m-1" color="green" outline><img src="../assets/icons/check.svg" class="h-4"></fwb-button>
            </fwb-table-cell>
        </fwb-table-row>
</template>
