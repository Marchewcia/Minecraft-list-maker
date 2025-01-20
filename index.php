<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MC item list maker</title>

        <link rel="stylesheet" href="styles.css">

        <?php
        header("Cache-Control: no-cache, must-revalidate");
        ?>

        <script src="jsLogic/rowManagment.js"></script>
        <script src="jsLogic/scraping.js"></script>
    </head>
    <body>
        <nav>
            <h1>
                Minecraft Item List Maker
            </h1>
            <div id="options">
                <button class="optionButtons" onclick="addNewColumn()">Add new item</button>
                <button class="optionButtons" onclick="scrapeData()">Save to JSON</button>
                <button class="optionButtons">Load from JSON</button>
                <button class="optionButtons">Export to image</button>
                <button class="optionButtons">Export to txt</button>
            </div>        
        </nav>

        <div id="mainWrapper">
            <table>
                <tbody>
                    <tr>
                        <th class="num">
                            No.
                        </th>
                        <th class="mname">
                            Block/Item name
                        </th>
                        <th class="amount">
                            Total amount(Stacks, Blocks)
                        </th>
                        <th class="del">
                            Delete item
                        </th>
                    </div>
                    <tr id="row1">
                        <td class="num">1</td>
                        <td class="mname"></td>
                        <td class="amount" id="idBlocks1">
                            <button id="total" onclick="setTotalAmount(1)">
                                0 Total Items
                            </button>
                            <button id="stacks" onclick="setStackAmount(1)">
                                0 Stacks 0 Items
                            </button>
                        </td>
                        <td class="del">
                            <button class="buttonDelete" onclick="deleteColumn(row1)">Delete element</button>
                        </td>
                    </div>
                </tbody>
            </table>
        </div>
    </body>
</html>