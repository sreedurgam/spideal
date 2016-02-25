<!--<% product.OfferSummary.forEach(function(amt){ %>
	<% amt.LowestNewPrice.forEach(function(price){ %>
        <%= price.Amount %>
        <%= price.CurrencyCode %>
        Formated Price:<%= price.FormattedPrice %>
	<%	}) %>
<%	}) %>-->


<!--
<td>
<% product.ItemAttributes.forEach(function(item){ %>
	<% item.ListPrice.forEach(function(price){ %>
          <%= price.Amount %>
		<% }) %>
<%	}) %>

</td>
-->


<td>
<% product.ItemAttributes.forEach(function(item){ %>
	<%= item.Binding %>
<%	}) %>
</td>
<td>
	<% product.ItemAttributes.forEach(function(item){ %>
	<%= item.Department %>
<%	}) %>
</td>